'use strict';
var decryptWalletCtrl = function($scope, $sce, $translate, walletService, contactService, memoService, authenticationService,globalService) {
    $scope.isApp =  globalFuncs.isApp();
    globalFuncs.hideLoadingWaiting();
    
    
    if (document.getElementById('pickWalletFile')){
        $scope.pickWalletFileModal = new Modal(document.getElementById('pickWalletFile'));
    }

  
	$scope.requireFPass =false;
    $scope.showFDecrypt  = false;
	$scope.hideWalletSelector = false;
    
    
    $scope.hasServerAddress = globalFuncs.hasConfig();
    
    $scope.message_creation='';
    
    $scope.getCurrWallet = function(){
      try{   
          var current = JSON.parse(localStorage.getItem('ComChainWallet'));  
          if (current) {
              try{  
                var other_wallets = JSON.parse(localStorage.getItem('ComChainWallets')); 
              } catch(e){}
              
              if (!other_wallets){
                  other_wallets=[]; 
              }  
              
              var id_curr=-1;
              for (var id in other_wallets){
                 if (other_wallets[id].file.address==current.address){
                              $scope.currWallet = other_wallets[id].file;
                              break;
                  }
               }
            }
        } catch(e){
        }
    }
    
    $scope.getCurrWallet();
  
	$scope.showContent = function($fileContent) {
        if (document.getElementById('fselector').files[0]){
            $scope.fileStatus = $sce.trustAsHtml(globalFuncs.getSuccessText(document.getElementById('fselector').files[0].name)); 
            
        } else if ($scope.SelectedFileName){
             $scope.fileStatus = $sce.trustAsHtml(globalFuncs.getSuccessText($scope.SelectedFileName));
        } else {
            $scope.fileStatus =  $sce.trustAsHtml(globalFuncs.getSuccessText($translate.instant('OPEN_Paper_selected'))); 
        }
		try {
            var current = JSON.parse($fileContent);
            if (typeof current === 'undefined' || typeof current.address === 'undefined' || 
                (typeof current.Crypto === 'undefined' && current.crypto === 'undefined') ||  typeof current.id === 'undefined'||  
                typeof current.version === 'undefined'){
                throw 'Missformed file';
            }
			$scope.fileContent = $fileContent;
            $scope.showFDecrypt = true;
            
		} catch (e) {
			$scope.fileStatus = $sce.trustAsHtml(globalFuncs.getDangerText($translate.instant('ERROR_4')));
		}
	};
    
    $scope.openFile = function(){              
       globalFuncs.showLoading($translate.instant("GP_Wait"));
       globalFuncs.loadWallet(JSON.parse($scope.fileContent),function(success){
           if (success){

               globalFuncs.loadWallets(true);
               try{
                    var current = JSON.parse($scope.fileContent);
                    contactService.ensureContact('0x'+current.address);
               } catch(e){}
               location.reload();
           } else { 
             globalFuncs.hideLoadingWaiting();
           }
       });
       
    }
    
    $scope.setAPINode = function(){
          globalFuncs.testNode($scope.api,function(success){
            if (success){
                // store the node 
                localStorage.setItem('ComChainAPI', $scope.api);
                alert('API node set to ' + $scope.api);
                $scope.setApiNodeModal.close();
            }else{
                alert('Provided API node not valid / available');
            }
        });

    }
    
    $scope.pickWallFile = function(name,index){
        $scope.SelectedFileIndex=index;
        $scope.SelectedFileName=name;
        
    }
    
    $scope.openWallFile =function(){
        if ( $scope.SelectedFileIndex>=0){
            var file_entry = $scope.dir_entries[ $scope.SelectedFileIndex];
            file_entry.file(function(file){
                var reader = new FileReader();
                reader.onloadend = function(evt) {
                   if(this.result) {
                       $scope.pickWalletFileModal.close();
                       $scope.showContent(this.result);        
                       $scope.$apply();      
                   } 
                 };
                reader.onerror = function(evt) {};
                reader.readAsText(file);
            },function(){});   
        }
    }
    
    $scope.success = function(entries) {
        var address_regex = /0x[a-z0-9]{40}/i;
        $scope.dir_entries=[];
        if (entries){
            for (var entry_id in entries){
                
                if (entries[entry_id].isFile && entries[entry_id].name.endsWith('.dat') ){
                     entries[entry_id].hasAddress= address_regex.test(entries[entry_id].name);
                     if (entries[entry_id].hasAddress){
                        entries[entry_id].address=address_regex.exec(entries[entry_id].name)[0];
                     }
                    
                    $scope.dir_entries.push(entries[entry_id]);
                }  
            }
        }
        $scope.len= $scope.dir_entries.length;
        $scope.SelectedFileIndex=-1;
        $scope.SelectedFileName='';
        $scope.$apply();
        $scope.pickWalletFileModal.open();
    }
    

    
    
    
	$scope.openFileDialog = function($fileContent) {
        if (!$scope.isApp){
		    document.getElementById('fselector').click();
        } else {
           globalFuncs.readCordovaDir($scope.success);  
       } 
	};
    
	$scope.onFilePassChange = function() {
		$scope.showFDecrypt = $scope.filePassword.length > 7;
	};
	

    $scope.confirmForgetWallet = function(){
        /* clear the local storage and reload the page */
        $scope.password = "";
	    $scope.wallet = null;
	    $scope.showWallet = false;
	    $scope.blob = $scope.blobEnc = "";
        $scope.isDone = true;
        $scope.showPass = true;
        globalFuncs.removeWallet();
        location.reload();
    }
    
	$scope.decryptWallet = function() {
        if (document.getElementById('passwdField').value=="SetApiNode"){
            document.getElementById('passwdField').value='';
             if (document.getElementById('setApiNode')){
                $scope.setApiNodeModal = new Modal(document.getElementById('setApiNode'));
            }

            $scope.api= globalFuncs.getServerAddress();
            $scope.setApiNodeModal.open();
            return;
        }
        
	    $scope.wallet=null;
        $scope.decryptStatus="";
		$scope.showFDecrypt = true;
		try {
            // toujours dans le cas d'un file dans le storage local
			$scope.fileContent = localStorage.getItem('ComChainWallet');
		    $scope.wallet = Wallet.getWalletFromPrivKeyFile($scope.fileContent, document.getElementById('passwdField').value);
            walletService.password = $scope.filePassword;
            walletService.wallet = $scope.wallet;
            walletService.setUsed();
            walletService.next_ok=true;
            
            $scope.hideWalletSelector = true;
            
         /*   localStorage.setItem('ComChainWallet',JSON.stringify($scope.wallet.toV3($scope.filePassword, {
                              kdf: globalFuncs.kdf, n: globalFuncs.scrypt.n,
                              server_name: globalFuncs.getServerName() })));  
            globalFuncs.loadWallets(true);*/
            
        
            
            
		} catch (e) {
            $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getDangerText($translate.instant('ERROR_7')));
		}
        if($scope.wallet!=null) $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getSuccessText($translate.instant('SUCCESS_2')));
        
        
        /****Load the contacts & memos *****/
        contactService.loadIpfsContacts($scope.wallet, walletService.password);
        memoService.loadIpfsMemos($scope.wallet, walletService.password);
	
	    /**** Authenticate *****/
	    authenticationService.authenticate($scope.wallet);
        
        /***if a payment is in the local storage: navigate to the corresponding page ****/
        var currAddress = globalService.getCurrAddress();
        if (currAddress!=null){
           globalService.navigateToPay(currAddress);
        }
	};
    
    $scope.loadWallet = function() {
        if ($scope.filePassword ){
            $scope.decryptStatus="";
		    $scope.showFDecrypt = true;
		    try {
                // toujours dans le cas d'un file dans le storage local
			    $scope.fileContent = localStorage.getItem('ComChainWallet');
		        $scope.wallet = Wallet.getWalletFromPrivKeyFile($scope.fileContent, $scope.filePassword);
                walletService.password = $scope.filePassword;
			
                walletService.wallet = $scope.wallet;
                $scope.hideWalletSelector = true;
		    } catch (e) {
                $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getDangerText($translate.instant('ERROR_7')));
		    }
            if($scope.wallet!=null) $scope.decryptStatus = $sce.trustAsHtml(globalFuncs.getSuccessText($translate.instant('SUCCESS_2')));

        }
	};
    
    
    $scope.helloPaperWallet = function(text){
       $scope.showContent(text);
       $scope.$apply();
    }
    
    $scope.startScanPaperWallet = function(){
        cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.helloPaperWallet(result.text);
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}, {'SCAN_MODE': 'QR_CODE_MODE'}
	    );
    };
    
    $scope.helloToken = function(text){
       $scope.token=text;
       $scope.$apply();
    }
    
    $scope.startScanToken = function(){
        cordova.plugins.barcodeScanner.scan(
		function (result) {
			$scope.helloToken(result.text);
		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}, {'SCAN_MODE': 'QR_CODE_MODE'}
	    );
    };
    
      $scope.validateToken =function(){
        var enr_txt=document.getElementById("enr_tk2").value;
        try {
            var enrollmentLetter = JSON.parse(enr_txt);  
            if (enrollmentLetter.servername){
                globalFuncs.getConfJSON(enrollmentLetter.servername,function(success){
                    if (success){
                         location.reload();  
                    } else {
                         $scope.message_creation=globalFuncs.getDangerText($translate.instant("GEN_No_server"));
                         $scope.$apply();      
                    }
                })
            } else {
                $scope.message_creation=globalFuncs.getDangerText($translate.instant("GEN_No_config"));
            }
           
        } catch (e) {
            $scope.message_creation=globalFuncs.getDangerText($translate.instant("GEN_Token_validation_error"));
        }  
        
    }
    
    
    $scope.loadWallet();


};
module.exports = decryptWalletCtrl;
