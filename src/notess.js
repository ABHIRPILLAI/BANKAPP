// BASIC BUILDING BLOCKS

// 1--- Module--to import 3rd party modules
// 2--- COmponents---to create html,css,ts file

// BASIC COMMANDS

// 1---ng new project_name---to create project
// 2--ng g c Component-name----tocreateanewcomponent
// 3-- ng serve --open

// login.component//register.component.html---body
// index---head/bootstrap
// app.component----selectorlink










// Databinding----Share data between components---ie,,,,between---ts file---and--htmlfile
// ts----component
// html-----veiw
//=========================== 1-----one-way-data-binding(1-direction)==================
// html---to---ts//////or//////ts--to--html


// ===========================A---Component--to--veiw============================================

// i)String--interpolation(1--direction)
// syntax----------{{expression}}
// {in our code login login component we creater a variable aim and ccalled in its html}



// ii)Property--binding---{
// {using []---placeholder we add [] and after = we add the name of the variable crated}
// }


// =============================B-----Veiw---to---component==========================================


// i)Event--Binding----(1 direction)---
// syntax---(event-name)="functionName()";


// ii)Event--binding--using--$event----
// syntax---(eventName)="functionName($event)";


//iii)Event binding using template referencing variable---syntax---#variable_name



//=========================== 1-----Two-way-data-binding(2-direction)==================

//ie  ts->html and html->ts

//i) ngModel--formsModule in app.module
//-----syntax--[(ngModel)]="property name"







////////////////////////////////////////////////////////////////////////////////////////////
//ANGULAR ROUTING
// To set path for a component
//syntax
//{
//path:"value",component:class_name
//}


//eg:

//login
//{
//path:'',component:LoginComponent
//},etccccccc.............

//put the above code in app-routing.module.ts


/////////////////////////////////////////////////////////////////
//Dependavce Injection



//to share datat between two dependend classes

//eg:Router class----navigateby url

//here dependancy injection so inside contructor bcoz it execute first







///////////////////////////////////////////////////////////////////////////////

//Angular Services

//to hold redundant data

// ng g s serviceName


///////////////////////////////////////////////////////////////

//ANGULAR DIRECTIVES
//to manipulate DOM
//a)COmponent Directives
//b)Structural Directives
   //1----------*ngFor





   /////////////////////////////
   //Angular forms


   //a-----Template driven forms(first design html page but cant do vaidation)
   //b---Model driven forms(first design model in ts file ,,, easy validation)
         //--Adavanced Validation
         //a)Reactive Forms
            //-form group.array,control
            //-we can directly add validation via importing Reactive Form Module

