# meteor-angular-tempalte
 Meteor + Angular 1.x project.

## Tips
1、After meteor create project
```javascript
meteor remove autopublish insecure
```
 autopublish,insecure package is created by Meteor.
 In a normal app,this two package is must remove for security and authority etc...
 
https://www.meteor.com/tutorials/blaze/security-with-methods
https://www.meteor.com/tutorials/blaze/publish-and-subscribe

2、Add angular,angular-ui-router,angular-templates
```javascript
meteor npm install angular --save
meteor npm install angular-ui-router --save

//user angluar router must with angular template
meteor add angular-templates
meteor remove blaze-html-templates
```

3、Add angular-meteor
```javascript
meteor npm install angular-meteor --save
```

Angular-Meteor is completely Open Source. It brings the responsive power of Angular to the powerful and flexible Meteor stack. Deploy wherever you want.

https://angular-meteor.com/