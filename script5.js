function calcular(operacao, num1, num2) {
    if (operacao === "adicao") {
      return num1 + num2;
    } else if (operacao === "subtracao") {
      return num1 - num2;
    } else if (operacao === "multiplicacao") {
      return num1 * num2;
    } else if (operacao === "divisao") {
        return num1 / num2;
    } else {
      return "Operação inválida";
    }
  }

  console.log(calcular("adicao", 5, 3));          
  console.log(calcular("subtracao", 8, 2));        
  console.log(calcular("multiplicacao", 4, 7));   
  console.log(calcular("divisao", 6, 2));                
  console.log(calcular("potencia", 2, 3));       
  