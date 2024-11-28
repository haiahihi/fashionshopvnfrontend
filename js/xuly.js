let amountElement = document.getElementById("amount");
        let amount = amountElement.value;
        //console.log(amount);
        let render = (amount) =>{
            amountElement.value = amount;
        }
        //xu ly tru
        let handleminus= () => {
            if(amount>1)
            amount--;
            render(amount);
        }
        let handleplus= () => {
            amount++;
            render(amount);
        }
        amountElement.addEventListener("input",() => {
            amount= amountElement.value;
            amount= parseInt(amount);
            amount= isNaN(amount) ? 1 : amount;
            render(amount);
            console.log(amount);
        });
        //amount1
        let amountElement1 = document.getElementById("amount1");
        let amount1 = amountElement1.value;
        //console.log(amount1);
        let render1 = (amount1) =>{
            amountElement1.value = amount1;
        }
        //xu ly tru
        let handleminus1= () => {
            if(amount1>1)
            amount1--;
            render1(amount1);
        }
        let handleplus1= () => {
            amount1++;
            render1(amount1);
        }
        amountElement1.addEventListener("input",() => {
            amount1= amountElement1.value;
            amount1= parseInt(amount1);
            amount1= isNaN(amount1) ? 1 : amount1;
            render1(amount1);
            console.log(amount1);
        });
        //amount2
        let amountElement2 = document.getElementById("amount2");
        let amount2 = amountElement2.value;
        //console.log(amount1);
        let render2 = (amount2) =>{
            amountElement2.value = amount2;
        }
        //xu ly tru
        let handleminus2= () => {
            if(amount2>1)
            amount2--;
            render2(amount2);
        }
        let handleplus2= () => {
            amount2++;
            render2(amount2);
        }
        amountElement2.addEventListener("input",() => {
            amount2= amountElement2.value;
            amount2= parseInt(amount2);
            amount2= isNaN(amount2) ? 1 : amount1;
            render2(amount2);
            console.log(amount2);
        });
        //amount 3
        let amountElement3 = document.getElementById("amount3");
        let amount3 = amountElement3.value;
        //console.log(amount1);
        let render3 = (amount3) =>{
            amountElement3.value = amount3;
        }
        //xu ly tru
        let handleminus3= () => {
            if(amount3>1)
            amount3--;
            render3(amount3);
        }
        let handleplus3= () => {
            amount3++;
            render3(amount3);
        }
        amountElement3.addEventListener("input",() => {
            amount3= amountElement3.value;
            amount3= parseInt(amount3);
            amount3= isNaN(amount3) ? 1 : amount1;
            render3(amount3);
            console.log(amount3);
        });