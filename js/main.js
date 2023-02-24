const containerDom = document.querySelector('.container');

for (let i = 1; i <= 200; i++){
    
    
    if(i % 3 == 0 && i % 5 == 0){
        
        let cuboDom = document.createElement('div');
        cuboDom.append('fizzbuzz');
        cuboDom.classList.add('cubo');
        cuboDom.classList.add('fizzbuzz');
        containerDom.append(cuboDom);
        console.log('fizzbuzz');
        
    }else if (i % 3 == 0){
        
        let cuboDom = document.createElement('div');
        cuboDom.append('fizz');
        cuboDom.classList.add('cubo');
        cuboDom.classList.add('fizz');
        containerDom.append(cuboDom);        
        console.log('fizz');
        
    }else if (i % 5 == 0){
        
        let cuboDom = document.createElement('div');
        cuboDom.append('buzz');
        cuboDom.classList.add('cubo');
        cuboDom.classList.add('buzz');
        containerDom.append(cuboDom);
        console.log('buzz');
        
    }else{
        
        let cuboDom = document.createElement('div');
        cuboDom.append(i);
        cuboDom.classList.add('cubo');
        containerDom.append(cuboDom);
        console.log(i);
    }
}
