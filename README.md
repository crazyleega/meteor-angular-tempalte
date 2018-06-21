# meteor-angular-tempalte
 Meteor + Angular 1.x project.

## Tips
1、After meteor create project
```javascript
 meteor remove autopublish
 meteor remove insecure
```
 autopublish,insecure package is created by Meteor.
 In a normal app,this two package is must remove for security and authority etc...
 https://www.meteor.com/tutorials/blaze/security-with-methods
 https://www.meteor.com/tutorials/blaze/publish-and-subscribe

2、Add angular,angular-ui-router
```javascript
meteor npm install angular --save
meteor npm install angular-ui-router --save
```

3、Add angular-meteor,angular-meteor-auth
```javascript
meteor npm install angular-meteor --save
meteor npm install angular-meteor-auth --save
```

An extension for the scope which comes in a seperate package called angular-meteor-auth and provides us with authentication related methods and properties.
https://angular-meteor.com/api/angular-meteor/1.3.11/auth