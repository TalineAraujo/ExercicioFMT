function getUserInfo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let user = {
          nome: "Rayane",
          idade: 23,
          email: "rayanecristina@gmail.com",
        };
        resolve(user);
      }, 2000);
    });
  }
  
  async function playGetUser(){
      let retorno = await getUserInfo();
      console.log(retorno);
  }
  
  playGetUser();