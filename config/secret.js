module.exports =  {
   
    // database :'mongodb://cart:cart123@ds013946.mlab.com:13946/cart',
    database : 'mongodb://localhost/companynew',
    port : process.env.PORT || 4000,
    secretKey:'Shashi@123' ,

    facebook : {
    	 clientID: process.env.FACEBOOK_ID || '496047697257964',
         clientSecret : process.env.FACEBOOK_SECRET || '44121051878f184fc3968f187bd98850',
         profileFields : ['emails' , 'displayName'],
         callbackURL   : 'http://localhost:4000/auth/facebook/callback'
    } ,

    google : {

        clientID      : '1082473697339-19jaalm7qm8f7h2573989bouv3vca67e.apps.googleusercontent.com',
        clientSecret  : 'hj28o_ybzVFt33YLzZdPs2sE',
        profileFields :  ['emails' , 'displayName'],
        callbackURL   : 'http://localhost:4000/auth/google/callback'
    }

}