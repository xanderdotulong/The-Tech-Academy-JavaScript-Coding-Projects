//Establish Variables to each changeable table entry
	var finalsize = document.getElementById('finalSize').textContent;
	var finalSizePrice = document.getElementById('finalSizePrice').textContent;
	var finalToppings = document.getElementById('finalToppings').textContent;
	var finalToppingsPrice = document.getElementById('finalToppingsPrice').textContent;
	var finalCheese = document.getElementById('finalCheese').textContent;
	var finalCheesePrice = document.getElementById('finalCheesePrice').textContent;
	var finalCrust = document.getElementById('finalCrust').textContent;
	var finalCrustPrice = document.getElementById('finalCrustPrice').textContent;
	var finalSauce = document.getElementById('finalSauce').textContent;
	var finalVeggies = document.getElementById('finalVeggies').textContent;
	var finalVeggiesPrice = document.getElementById('finalVeggiesPrice').textContent;
	var finalPrice = document.getElementById('finalPrice').textContent;
	
	
var button = document.getElementById('button').addEventListener 
	('click', function(){
		
		//Determine Size
			var size = document.getElementsByClassName('size');
			for (var i = 0; i < size.length; i++) {
		
				if (size[i].checked) {
				var selectedSize = size[i].value;
				var finalsize = selectedSize;
				 document.getElementById('finalSize').innerHTML = finalsize;
			}
			//Determine Size Price
				if (finalsize === "Personal") {
				finalSizePrice = 6;
				} else if (finalsize === "Medium") {
				finalSizePrice = 10;
				} else if (finalsize === "Large") {
				finalSizePrice = 14;
				} else if (finalsize === "X-Large") {
				finalSizePrice = 16;
				}  
				console.log(finalSizePrice);
				document.getElementById('finalSizePrice').innerHTML = finalSizePrice;
			}
		
		//Determine Toppings
			var toppings = document.getElementsByClassName ('toppings');
			var selectedToppings = [];
			for (var v = 0; v < toppings.length; v++) {
				if (toppings[v].checked) {
					selectedToppings.push(toppings[v].value);
					finalToppings = finalToppings+"</br>"+toppings[v].value;
					document.getElementById('finalToppings').innerHTML = finalToppings;
					console.log(finalToppings);
				}
			}
				
			//Determine Toppings Price
			var toppingsCount = toppings.length;
			console.log(toppings.length);
			if (toppingsCount > 1) {
			toppingsCount = (toppingsCount - 1)
			} else {
			toppingsCount = 0;
				}
			
			finalToppingsPrice = toppingsCount*1;
			document.getElementById('finalToppingsPrice').innerHTML = finalToppingsPrice;
		
		//Determine Cheese Level
		
			var cheese = document.getElementsByClassName('cheese');
			for (var u = 0; u < cheese.length; u++) {
		
				if (cheese[u].checked) {
				var selectedCheese = cheese[u].value;
				var finalCheese = selectedCheese;
				 document.getElementById('finalCheese').innerHTML = finalCheese.toString();
				}
			//Determine Size Price
				if (finalCheese == "Extra Cheese") {
				finalCheesePrice = 3;
				} else {
				finalCheesePrice = 0;
				}
				document.getElementById('finalCheesePrice').innerHTML = finalCheesePrice;
			}
		
		//Determine Crust
		
		var crust = document.getElementsByClassName('crust');
			for (var x = 0; x < crust.length; x++) {
		
				if (crust[x].checked) {
				var selectedCrust = crust[x].value;
				var finalCrust = selectedCrust;
				 document.getElementById('finalCrust').innerHTML = finalCrust;
			}
			//Determine Size Price
				if (finalCrust === "Cheese Stuffed Crust") {
				finalCrustPrice = 3;
				} else {
				finalCrustPrice = 0;
				}
				document.getElementById('finalCrustPrice').innerHTML = finalCrustPrice;
			}
		
		
		//Determine Sauce
		
			var sauce = document.getElementsByClassName('sauce');
			for (var u = 0; u < sauce.length; u++) {

			if (sauce[u].checked) {
			var selectedSauce = sauce[u].value;
			var finalSauce = selectedSauce;
			document.getElementById('finalSauce').innerHTML = finalSauce;
			}}
		
		//Determine Veggies
		
		var veggies = document.getElementsByClassName ('veggies');
			var selectedVeggies = [];
			for (var a = 0; a < veggies.length; a++) {
				if (veggies[a].checked) {
					selectedVeggies.push(veggies[a].value);
					finalVeggies = finalVeggies+"</br>"+veggies[a].value;
					document.getElementById('finalVeggies').innerHTML = finalVeggies;
				}
			}
				
			//Determine Veggies Price
			var veggiesCount = veggies.length;
			if (toppingsCount > 1) {
			veggiesCount = (veggiesCount - 1)
			} else {
			veggiesCount = 0;
				}
			
			finalVeggiesPrice = veggiesCount*1;
			document.getElementById('finalVeggiesPrice').innerHTML = finalVeggiesPrice;
		
		//Determine Order Total
		
		var total= finalSizePrice+finalToppingsPrice+finalCheesePrice+finalCrustPrice+finalVeggiesPrice;
		finalPrice = '$ '+total;
		document.getElementById('finalPrice').innerHTML = finalPrice;
		
	});