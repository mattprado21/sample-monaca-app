# Principles for Directory Structure, File Placement and Naming Conventions
## Contents
- [**Principles of Directory Structure and File Naming Conventions**](#principles-of-directory-structure-and-file-naming-conventions)
  - [**The Root Directory**](#the-root-directory)
    - [The **Environment** Files](#the-environment-files)
    - [The **app** Directory](#the-app-directory)
    - [The **bootstrap** Directory](#the-bootstrap-directory)
    - [The **config** Directory](#the-config-directory)
    - [The **database** Directory](#the-database-directory)
    - [The **public** Directory](#the-public-directory)
    - [The **resources** Directory](#the-resources-directory)
    - [The **routes** Directory](#the-routes-directory)
    - [The **storage** Directory](#the-storage-directory)
    - [The **tests** Directory](#the-tests-directory)
    - [The **vendor** Directory](#the-vendor-directory)
  - [**The App Directory Structure**](#the-app-directory-structure)
    - [Most Commonly Used **app** Directories](#most-commonly-used-app-directories)
      - [The **Http** Directory](#the-http-directory)
      - [The **Jobs** Directory](#the-jobs-directory)
      - [The **Mail** Directory](#the-mail-directory)
      - [The **Models** Directory](#the-models-directory)
      - [The **Providers** Directory](#the-providers-directory)
      - [The **Rules** Directory](#the-rules-directory)
      - [The **Console** Directory](#the-console-directory)
      - [The **Exceptions** Directory](#the-exceptions-directory)
    - [Other **app** Directories](#other-app-directories)
      - [The **Broadcasting** Directory](#the-broadcasting-directory)
      - [The **Events** Directory](#the-events-directory)
      - [The **Listeners** Directory](#the-listeners-directory)
      - [The **Notifications** Directory](#the-notifications-directory)
      - [The **Policies** Directory](#the-policies-directory)
- [**Overall Directory Structure Example**](#overall-directory-structure-example)
- [**References**](#references)


### **Principles of Directory Structure and File Naming Conventions**
***
This section highlights the crucial role of standardized directory structures, file placement, and naming conventions in Laravel, emphasizing their impact on enhancing readability, maintainability, and efficient team collaboration. It also stresses the significance of adhering to consistent development standards across all projects, which ensures a unified approach and streamlines the development process for teams working on different projects within the same framework - Laravel.

### The Root Directory
***
### **The Environment Files**
___
#### **1. Sensitive Information**
- **Storing API Keys and Similar Data**:
  - **Recommendation**: Store sensitive data like API keys in `.env` files, not in version control.
  - **Example**:
    ```plaintext
    # .env file
    API_KEY=your_api_key
    ```

#### **2. Configuration Files**
- **Using `.env` for Environment-Specific Settings**:
  - **Recommendation**: Utilize `.env` for environment-specific configurations and `config` directory for non-sensitive settings.
  - **Example**:
    ```php
    # config/database.php
    $databaseUrl = env('DB_URL', 'default_url');
    ```

#### **3. Accessing Environment Data**
- **Proper Usage of `.env` Data**:
  - **Recommendation**: Instead of directly accessing `.env` data, pass it to configuration files and use the `config()` helper function in your application.
  - **Bad Practice**:
    ```php
    $apiKey = env('API_KEY');
    ```
  - **Recommended Practice**:
    ```php
    // In config/api.php
    'key' => env('API_KEY'),

    // Usage in application
    $apiKey = config('api.key');
    ```

#### **4. Default Values**
- **Setting Default Values for Environment Variables**:
  - **Recommendation**: Provide default values for environment variables in your code.
  - **Example**:
    ```php
    # In a controller
    $apiKey = env('API_KEY', 'default_key');
    ```

#### **5. Caching Environment Changes**
- **Updating Cache After `.env` Modifications**:
  - **Recommendation**: Run `php artisan config:cache` to refresh configuration cache after changes to `.env` files.
  - **Command Example**:
    ```bash
    php artisan config:cache
    ```

### **The App Directory**
___
The ```app``` directory contains the core code of your application. [More details are discussed here](#the-app-directory-structure)

[🔝 Back to contents](#contents)

### **The Bootstrap Directory**
___
The bootstrap directory contains the `app.php` file which bootstraps the framework. This directory also houses a cache directory which contains framework generated files for performance optimization such as the route and services cache files. 

> [!NOTE]
> - You should not typically need to modify any files within this directory.
> - Laravel's bootstrap folder has nothing to do with the Bootstrap CSS framework, it's used to initialize (setting up path & environments) the framework.

[🔝 Back to contents](#contents)

### **The Config Directory**
___
The ```config``` directory, as the name implies, contains all of your application's configuration files.
You can access the configuration values on the files by using ```config``` helper.
For example
If you create ```config/constants.php``` to store your constants
```constants.php```
```
return [
  'pagination_limit' => 10
];
```
You can access it by
```
$paginationLimit = config('constants.pagination_limit');
```

> [!NOTE]
> - If you are using the ```php artisan config:cache``` command to cache your configuration files for performance reasons (which is common in production environments), then you should run ```php artisan config:clear``` when you update configuration files.
> - Configuration files should stay in the `config/` directory. Sensitive data like database passwords should be in the `.env` file, not in the config files directly.

[🔝 Back to contents](#contents)

### **The Database Directory**
___
The ```database``` directory contains your database **migrations**, **model factories**, and **seeders**. If you wish, you may also use this directory to hold an SQLite database.
- **Migrations**: These are like version control of your database. Used to create and modify database tables.
- **Seeds**: Houses seed files that populate the database with initial data for development or testing.
- **Factories**: During testing your application or seeding your database, you may need to insert a few records into your database. Instead of manually specifying the value of each column, Laravel allows you to define a set of default attributes for each of your Eloquent models using model factories.

> [!NOTE]
> - Migrations, Seeders and Factories class names are created in **PascalCase** by default
> - **Use descriptive names**: Name your migration files descriptively so that it’s easy to understand their changes to the schema. 
> **Bad Practice**
> ```
> 2014_10_12_000000_create_table.php
> ```
> **Best Practice**
> ```
> 2014_10_12_000000_create_users_table.php
> ...
> 2023_10_16_152138_add_column_to_shop_operators_table.php
> ```
> - In migrations, it is recommended to use anonymous migrations to avoid conflicts (Laravel 8 and above)
Laravel generates anonymous migrations for you as long as you’re using Laravel 9 and above:
>
> `php artisan make:migration CreateUsersTable`
>
> This is how they look:
> ```
> <?php
> use IlluminateSupportFacadesSchema;
> use IlluminateDatabaseSchemaBlueprint;
> use IlluminateDatabaseMigrationsMigration;
>
> return new class extends Migration {
>     Schema::create('users', function (Blueprint $table) {
>          $table->id();
>             // Other columns...
>    });
> };
> ```

[🔝 Back to contents](#contents)

### **The Public Directory**
___
The `public` directory contains the `index.php` file, which is the entry point for all requests entering your application and configures autoloading.
This directory also houses your assets such as `images`, `JavaScript`, and `CSS`. This means that your domain should be pointing to this `public` folder (ex. `/var/www/html/laravel-project/public`).

> [!NOTE]
> - Don’t track your compiled CSS and JavaScript - Your CSS and JavaScript are generated using originals in resources/css and resource/js. When deploying into production, you either compile them on the server or you create an artifact before. Include `public/css` and `public/js` in .gitignore to prevent comitting always the `public/css/app.css` or `public/js/app.js` everytime there is changes.
> - You may also add a `.htaccess` file in the public directory of your Laravel application, which is crucial for URL rewriting, directing all HTTP requests to the `index.php` file - a key component of Laravel's routing system. It plays a significant role in enhancing security by restricting direct file access, helps in removing `/public` from URLs for a neater user experience, and allows for the configuration of custom error pages and redirects. Note that its use is specific to Apache web servers, and alternatives like Nginx manage these configurations differently.

[🔝 Back to contents](#contents)

### **The Resources Directory**
___
The `resources` directory contains your `views` as well as your raw, un-compiled assets such as CSS or JavaScript. It contains folders, `lang`, `views`, `sass` or `css` and `js`.
1. `lang` - Contains language files for localization. This directory is used to store language files for different locales, enabling easy translation and localization of your application.
Language files are generally named after their corresponding translation keys. For example, `auth.php` might contain translations related to authentication, `pagination.php` for pagination-related texts, `validation.php`, etc. Each locale has its own subdirectory, like `en` for English, `ja` for Japanese, and so forth, containing the respective language files.
This is how they look
```
/resources
  /lang
    /en
      validation.php
    /ja
      validation.php
```
2. `views` - Stores the Blade template files. Blade is Laravel's templating engine, and this directory contains all the views that your application renders.
Views are typically named in a way that reflects the content or purpose of the view. In the official Laravel documentation, there isn't a prescribed format for naming Blade template files. To establish a standard within our organization, we recommend adopting the **kebab-case** format for naming these templates. 

**Bad Practice**
```
// Using inconsistent or non-descriptive names like 
ViewShop.blade.php or view_shop.balde.php or view.blade.php
```
**Good Practice**
```
// kebab-case and descriptive names
view-shop.blade.php
```

> [!IMPORTANT]
> - If the usage is specific to a particular system, create it under the directory for that system.
> - For files that are used across subsystems, place them in higher-level directories.
> ```
> - admin
>     - agency
>         - components
>             - Files specifically for use in agency admin system.
>     - shop
>         - components
>             - Files specifically for use in shop admin system.
>     - components
>         - Files specifically for use in admin systems.
> - agency
>     - components
>         - Files exclusively for use in agency.
> - shop
>     - components
>         - Files exclusively for use in shop.
> - components
>     - Files commonly used across the subsystems.
> ```

3. `sass or css` - This is where you would put your styling files.
The main file is often named app.scss or app.css. You can also have other files for different parts of your application, like `header.scss`, `footer.scss`, etc., which are then imported into the main file.

4. `js` - This directory is for JavaScript files. You would store your application's JavaScript scripts, components, and possibly JavaScript frameworks or libraries here.
The main entry point is typically `app.js`. Similar to the `sass/` directory, you can have additional files for different parts or components of your application, like `header.js`, `form.js`, etc.

[🔝 Back to contents](#contents)

### **The Routes Directory**
___
The routes directory contains all of the route definitions for your application. By default, several route files are included with Laravel: `web.php`, `api.php`, `console.php`, and `channels.php`.
a. The `web.php` file contains routes that the `RouteServiceProvider` places in the `web` middleware group, which provides session state, CSRF protection, and cookie encryption. If your application does not offer a stateless, RESTful API then all your routes will most likely be defined in the `web.php` file.

b. The `api.php` file contains routes that the `RouteServiceProvider` places in the `api` middleware group. These routes are intended to be stateless, so requests entering the application through these routes are intended to be authenticated via tokens and will not have access to session state.

c. The `console.php` file is where you may define all of your closure based `console` commands. 

d. The `channels.php `file is where you may register all of the event broadcasting channels that your application supports.

[🔝 Back to contents](#contents)

### **The Storage Directory**
___
The `storage` directory contains your logs, compiled Blade templates, file based sessions, file caches, and other files generated by the framework. This directory is segregated into `app`, `framework`, and `logs` directories. The `app` directory may be used to store any files generated by your application. The `framework` directory is used to store framework generated files and caches. Finally, the `logs` directory contains your application's log files.

The `storage/app/public` directory may be used to store user-generated files, such as profile avatars, that should be publicly accessible. You should create a symbolic link at `public/storage` which points to this directory. You may create the link using the artisan command

`php artisan storage:link`

[🔝 Back to contents](#contents)

### **The Tests Directory**
___
The `tests` directory contains your automated tests. Example PHPUnit unit tests and feature tests are provided out of the box. Each test class should be suffixed with the word Test. You may run your tests using the `phpunit` or `php vendor/bin/phpunit` commands. Or, if you would like a more detailed and beautiful representation of your test results, you may run your tests using the php artisan test Artisan command.

**Subdirectories**:
a. `Feature/`: Contains tests that interact with various parts of your application, like testing HTTP routes, middleware, controllers, etc.
b. `Unit/`: For tests that focus on a very small, isolated portion of your code, such as a single method.

> [!NOTE]
> - Test file names generally mirror the name of the class or file they are testing. Make sure provide descriptive file name based on its purpose
> - For a feature test of the `UserRegistration` process, the test might be named `UserRegistrationTest.php`.
> - For a unit test of a `Calculator` class, the test might be named `CalculatorTest.php`.
>
> **Example of a Unit Test:**
>```
>// tests/Unit/CalculatorTest.php
>
>use PHPUnit\Framework\TestCase;
>use App\Calculator;
>
>class CalculatorTest extends TestCase
>{
>    /** @test */
>    public function it_adds_two_numbers()
>    {
>        $calculator = new Calculator();
>        $this->assertEquals(4, $calculator->add(2, 2));
>    }
>}
>```
>
>**Example of a Feature Test:**
>```
>// tests/Feature/UserRegistrationTest.php
>
>namespace Tests\Feature;
>
>use Tests\TestCase;
>use Illuminate\Foundation\Testing\RefreshDatabase;
>
>class UserRegistrationTest extends TestCase
>{
>    use RefreshDatabase;
>
>    /** @test */
>    public function a_user_can_register()
>    {
>        // Test logic here...
>    }
>}
>```

[🔝 Back to contents](#contents)

### **The Vendor Directory**
___
The `vendor` directory contains your Composer dependencies. Always make sure to not track and include it on the .gitignore file
.gitignore

```
/vendor/
/node_modules/
...
```

[🔝 Back to contents](#contents)


### **The App Directory Structure**
***
The majority of your application is housed in the app directory. By default, this directory is namespaced under `App` and is autoloaded by Composer using the [PSR-4 autoloading standard](https://www.php-fig.org/psr/psr-4/).
A variety of other directories will be generated inside the `app` directory as you use the make Artisan commands to generate classes. So, for example, the `app/Jobs` directory will not exist until you execute the `make:job` Artisan command to generate a job class.
Many of the classes in the `app` directory can be generated by Artisan via commands. To review the available commands, run the `php artisan list make` command in your terminal.
### **Most Commonly Used app Directories**
***
### **The Http Directory**
___
The Http directory contains your controllers, middleware, and form requests. Almost all of the logic to handle requests entering your application will be placed in this directory.

**Subdirectories/files in the Http Folder:**
a. `Controllers/` - Controllers handle incoming HTTP requests and return responses. They contain the logic to interact with the model and return the appropriate view or data.

**Naming Conventions**: Controller names are usually in **StudlyCase** (also known as **PascalCase**) and often end with the word **Controller**. For instance, a controller handling user data might be named `UserController.php`. If the controller is meant to handle more specific actions, it might have a more descriptive name like `UserRegistrationController.php`.
Example
```
// app/Http/Controllers/UserController.php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', compact('users'));
    }
}

```
b. `Middleware/` - Middleware acts as a filter for HTTP requests. It can modify requests or responses, or perform actions like authentication before a request reaches the controller.

**Naming Conventions**: Middleware names are generally in StudlyCase and describe the action they perform. For example, a middleware that authenticates users might be named `Authenticate.php`
```
// app/Http/Middleware/Authenticate.php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class Authenticate
{
    public function handle($request, Closure $next)
    {
        if (Auth::guest()) {
            return redirect('login');
        }

        return $next($request);
    }
}

```
c. `Requests/` - This directory contains form request classes, which are a way to encapsulate validation logic.

**Naming Conventions**: Names for request classes are typically in StudlyCase and end with Request. They should describe the action or the type of data they are validating, like `UpdateUserRequest.php` or `CreatePostRequest.php`.
```
// app/Http/Requests/UpdateUserRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|max:255',
            // other validation rules...
        ];
    }
}

```
d. `Kernel.php` - In this file, we register the `middleware`.
Example (_Auth middleware from the example above_)
```
<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    ...
    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class,
         ...
    ];
}
```

[🔝 Back to contents](#contents)

### **The Jobs Directory**
___
This directory does not exist by default, but will be created for you if you execute the `make:job` Artisan command. The `Jobs` directory houses the queueable jobs for your application. Jobs may be queued by your application or run synchronously within the current request lifecycle. Jobs that run synchronously during the current request are sometimes referred to as "commands" since they are an implementation of the [command pattern](https://en.wikipedia.org/wiki/Command_pattern).

**Naming Conventions:** The names of job classes should be descriptive and typically reflect the task they perform. They are written in **StudlyCase (PascalCase)**. For example, a job that sends an email might be named `SendWelcomeEmail.php`.
```
// app/Jobs/SendWelcomeEmail.php

namespace App\Jobs;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Mail;

class SendWelcomeEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function handle()
    {
        $email = new WelcomeEmail($this->user);
        Mail::to($this->user->email)->send($email);
    }
}
```

[🔝 Back to contents](#contents)

### **The Mail Directory**
___
This directory does not exist by default, but will be created for you if you execute the `make:mail` Artisan command. The `Mail` directory contains all of your classes that represent emails sent by your application. Mail objects allow you to encapsulate all of the logic of building an email in a single, simple class that may be sent using the `Mail::send` method.

**Naming Conventions:** The names of mailable classes should be descriptive and reflect the purpose of the email being sent. They are usually written in **StudlyCase (PascalCase)**. For example, a mailable class for sending a welcome email to a new user might be named `WelcomeEmail.php`.
```
// app/Mail/WelcomeEmail.php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class WelcomeEmail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function build()
    {
        return $this->view('emails.welcome')
            ->with([
                'name' => $this->user->name,
            ]);
    }
}
```

[🔝 Back to contents](#contents)

### **The Models Directory**
___
The `Models` directory contains all of your Eloquent model classes. The Eloquent ORM included with Laravel provides a beautiful, simple ActiveRecord implementation for working with your database. Each database table has a corresponding "Model" which is used to interact with that table. Models allow you to query for data in your tables, as well as insert new records into the table.

**Naming Conventions:** Model class names should be singular and written in **StudlyCase (also known as PascalCase)**. This is because each model typically corresponds to a single record in your database, and the singular name signifies that. For instance, a model for a `users` table would be `User`.
```
// app/Models/User.php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    // The attributes that are mass assignable.
    protected $fillable = [
        'name', 'email', 'password',
    ];

    // Hidden attributes for arrays.
    protected $hidden = [
        'password', 'remember_token',
    ];

    // The attributes that should be cast to native types.
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Example of a model relationship
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
```

[🔝 Back to contents](#contents)

### **The Providers Directory**
___
The `Providers` directory contains all of the service providers for your application. Service providers bootstrap your application by binding services in the service container, registering events, or performing any other tasks to prepare your application for incoming requests.

In a fresh Laravel application, this directory will already contain several providers. You are free to add your own providers to this directory as needed.

[🔝 Back to contents](#contents)

### **The Rules Directory**
___
This directory does not exist by default, but will be created for you if you execute the `make:rule` Artisan command. The `Rules` directory contains the custom validation rule objects for your application. Rules are used to encapsulate complicated validation logic in a simple object. For more information, check out the validation documentation.

**Naming Conventions:** Custom validation rule class names should be descriptive and reflect the validation they perform. They are typically written in **StudlyCase (PascalCase)**. For example, a custom rule that checks if a string is a palindrome might be named `IsPalindrome` or `IsPalindrome.php`.
```
// app/Rules/IsPalindrome.php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class IsPalindrome implements Rule
{
    public function passes($attribute, $value)
    {
        return $value === strrev($value);
    }

    public function message()
    {
        return 'The :attribute must be a palindrome.';
    }
}
```

[🔝 Back to contents](#contents)

### **The Console Directory**
___
The `Console` directory contains all of the custom Artisan commands for your application. These commands may be generated using the `make:command` command. This directory also houses your console kernel, which is where your custom Artisan commands are registered and your scheduled tasks are defined.

They are generally written also in StudlyCase (**PascalCase**).
The `Kernel.php` file in this directory is where you can schedule your commands and define custom command signatures.

Example Custome Command
```
// app/Console/Commands/GenerateReport.php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class GenerateReport extends Command
{
    // The name and signature of the console command
    protected $signature = 'report:generate';

    // The console command description
    protected $description = 'Generates a report';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        // Command logic here
        $this->info('Report generated successfully!');
    }
}
```
Registering Custom Commands in `app/Console/Kernel.php`
```
protected $commands = [
    Commands\GenerateReport::class,
];
```

[🔝 Back to contents](#contents)

### **The Exceptions Directory**
___
The `Exceptions` directory contains your application's exception handler and is also a good place to place any exceptions thrown by your application. If you would like to customize how your exceptions are logged or rendered, you should modify the `Handler` class in this directory.

They are generally written also in StudlyCase (PascalCase). For example, a custom exception for a failed payment might be named `PaymentFailedException` or `PaymentFailedException.php`.
```
// app/Exceptions/PaymentFailedException.php

namespace App\Exceptions;

use Exception;

class PaymentFailedException extends Exception
{
    protected $message;

    public function __construct($message = "Payment processing failed")
    {
        $this->message = $message;
    }
}
```

How to use it
```
use App\Exceptions\PaymentFailedException;

function processPayment($paymentDetails)
{
    if (/* payment fails */) {
        throw new PaymentFailedException('The payment could not be processed');
    }

    // continue payment processing
}
```
[🔝 Back to contents](#contents)


### **Other app Directories**
***
### **The Broadcasting Directory**
___
The `Broadcasting` directory contains all of the broadcast channel classes for your application. These classes are generated using the make:channel command. This directory does not exist by default, but will be created for you when you create your first channel. To learn more about channels, check out the documentation on event broadcasting.

[🔝 Back to contents](#contents)

### **The Events Directory**
___
This directory does not exist by default, but will be created for you by the `event:generate` and `make:event` Artisan commands. The Events directory houses event classes. Events may be used to alert other parts of your application that a given action has occurred, providing a great deal of flexibility and decoupling.

[🔝 Back to contents](#contents)

### **The Listeners Directory**
___
This directory does not exist by default, but will be created for you if you execute the `event:generate` or `make:listener` Artisan commands. The `Listeners` directory contains the classes that handle your events. Event listeners receive an event instance and perform logic in response to the event being fired. For example, a `UserRegistered` event might be handled by a `SendWelcomeEmail` listener.

[🔝 Back to contents](#contents)

### **The Notifications Directory**
___
This directory does not exist by default, but will be created for you if you execute the `make:notification` Artisan command. The `Notifications` directory contains all of the "transactional" notifications that are sent by your application, such as simple notifications about events that happen within your application. Laravel's notification feature abstracts sending notifications over a variety of drivers such as _email, Slack, SMS_, or stored in a database.

[🔝 Back to contents](#contents)

### **The Policies Directory**
___
This directory does not exist by default, but will be created for you if you execute the `make:policy` Artisan command. The `Policies` directory contains the authorization policy classes for your application. Policies are used to determine if a user can perform a given action against a resource.

[🔝 Back to contents](#contents)


### **References**
- https://laravel.com/docs/9.x/structure
- https://benjamincrozat.com/laravel-best-practices#use-anonymous-migrations-to-avoid-conflicts-laravel-8-and-above
- https://marketsplash.com/tutorials/laravel/how-to-handle-database-migrations-in-laravel/
- https://laravellab.com/laravel-directory-structure/
