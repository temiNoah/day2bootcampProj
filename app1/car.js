function Car (n, c,t)
{
   if(n === undefined && c===undefined && t ===undefined)
   {
	    this.name='General';
		this.model='GM';
	}
	
   else
    {
		this.name=n;
	   this.model = c;
	  this.type =t;
	   if(this.name === 'Porshe' || this.name=== 'Koenigsegg')
        this.numOfDoors = 2
       else 
        this.numOfDoors = 4;

        if(this.type === 'trailer')
         this.numOfWheels = 8;
        else 
        this.numOfWheels = 4;


      if(this.name === 'MAN' )
        this.isSaloon = false ;
    
      else
        this.isSaloon = true; 

       this.speed = '0 km/h';
	  }
   return this;

}
Car.prototype.drive = function(n){
	if(n === 5)
		this.speed='250 km/h';
	else
       this.speed='77 km/h';

   return this;
	}

exports.Car = Car;
/*
Car.prototype.drive = function(n){
       this.speed='77 km/h';
	}


	//let name,model,type;
   constructor({name='General',model='GM'})
   {
   	 //if(data.length === 0)
   	 //{
   	 	this.name=name;
   	 this.model=model;
   
    //}
     
   }
	

    Car(name,model)
    {
    	this.name = name;
		this.model = model;

      if(this.name === 'Porshe' || this.name==='koenigsegg')
        this.numOfDoors = 2
    else 
        this.numOfDoors = 4;
  }


Car(name,model,type)
{
      
      if(this.type === 'trailer')
         this.numOfWheels = 8;
else 
      this.numOfWheels = 4;


      if(this.name === 'Man')
        this.isSaloon = false ;
    
else
        this.isSaloon = true; 

       this.speed = '0 km/h';
    
}
 
    drive(n)
    {
     this.speed='77 km/h';
     }
}

exports.Car = Car;
*/