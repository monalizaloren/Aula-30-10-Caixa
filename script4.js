function calcularPresentesDeNatal(numeroDeAmigos) {
    if (numeroDeAmigos < 1) {
      return "Ninguém te deu presentes. 😞";
    } else if (numeroDeAmigos === 1) {
      return "Você ganhou 1 presente. 🎁";
    } else {
      return "Você ganhou " + numeroDeAmigos + " presentes!";
    }
  }
  
  console.log(calcularPresentesDeNatal(0));    
  console.log(calcularPresentesDeNatal(1));   
  console.log(calcularPresentesDeNatal(5));   

  
