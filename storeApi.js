//Created by Ismail
//website: pcfacile1.com

var store = {
		setData: function(nameData,valueData){
			this.nameData = nameData;
			this.valueData = valueData;
			this.convertValueData = JSON.stringify(this.valueData);
			localStorage.setItem(this.nameData, this.convertValueData);
		},
		getData: function(getNameData){
			this.getNameData = getNameData;
			this.convertNameData = localStorage.getItem(this.getNameData);
			return JSON.parse(this.convertNameData);
		},
		removeData: function(removeData){
			this.removeData = removeData;
			localStorage.removeItem(this.removeData);
		}
	}
