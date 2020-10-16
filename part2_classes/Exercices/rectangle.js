class Rectangle{
   
    constructor(w, h){
        // attributs de classe
        this._w = w;
        this._h = h;       
        this.name = "Rectangle";
    } 

    // ...
    get w(){
        return this._w;
    }

    get h(){
        return this._h;
    }
    set w(w){
        if(parseFloat(w) == w){
            this._w = w;
            return;
            console.log('Bad value');
        }
    }
    set h(h){
        if(parseFloat(h) == h){
            this._h = h;
            return;
            console.log('Bad value');
        }
    }
   
}

rect = new Rectangle(1,2);
rect.w = 10
rect.h = 5
console.log(`Dimension de mon rectangle ${rect.w} largeur ${rect.h} hauteur.
On peut egalement calculer l'air : ${rect.w * rect.h} m2`);

 
class Square extends Rectangle{
    constructor(w){
        super(w,w);
    }
}
const square = new Square(5);
console.log(`Dimension de mon rectangle ${square.w} largeur ${square.h} hauteur.
On peut egalement calculer l'air : ${square.w * square.h} m2`);