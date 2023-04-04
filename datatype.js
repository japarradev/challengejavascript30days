let x = 10;

function test() {
    let x = 20;
    if(true){
      let x = 30;
      console.log(x);
    }
    console.log(x);
  }
  
  console.log(x);
  test();
  console.log(x); 