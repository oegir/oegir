# Aleksei Petrov

> **PHP Backend Developer** | REST API | MySQL | Open to Remote

Varna, Bulgaria | Open to relocation within the EU

[LinkedIn](https://www.linkedin.com/in/webprogrammist) | [GitHub](https://github.com/oegir) | [Facebook](https://www.facebook.com/aleksei.336862/)

<a href="#/resume">English</a> | <a href="#/ru/resume">Русский</a> | <a href="#/bg/resume">Български</a>

## Profile

PHP Backend Developer with 10+ years of combined experience in software and web development. I build and improve reliable services, work comfortably with legacy systems, and collaborate effectively with frontend teams.

My core stack is **PHP, MySQL, SQL, and REST API**, with experience across hosting infrastructure, billing systems, CRM solutions, and microservice architecture.

I also have experience in natural language text processing: language identification, topic classification of texts, and rule-based information extraction from free-text descriptions.

**Work authorization:** Authorized to work in Bulgaria under an EU Blue Card, held for more than four years. Eligible for a simplified employer-change procedure.

**Job preferences:** Prefer a Bulgarian employer; also open to relocation within the EU.

**Salary expectations:** EUR 3,600-4,000 gross per month, negotiable.

## Experience

### [WebPros](https://webpros.com/)

**Software Developer** | October 2021 - Present | Remote<br>
Sofia, Bulgaria

Backend development for WHMCS, a billing and automation platform used by thousands of hosting providers, and for Plesk control panel extensions.

**WHMCS - billing and payment gateways**

- Resolved a critical payment-sync failure in the Stripe module caused by a breaking Stripe API change, restoring automatic payment recording instead of manual reconciliation by providers.
- Proposed and built a unified currency service in the WHMCS core to replace duplicated logic in the Stripe and PayPal modules, and used it for on-the-fly currency conversion that kept Stripe integrations working after Stripe allowed account currency changes.
- Fixed production defects in the WHMCS core, from a customer-reported VAT miscalculation on prorated payments (fixed with regression tests within one sprint) to invoice, order, and OAuth mail authentication issues, adding automated tests for every change.
- Maintained the PayPal integration through PayPal API and checkout changes, and extended the WHMCS-Plesk integration to sync domain nameservers through the Plesk XML API.

**Plesk extensions**

- Migrated the Grafana extension from Grafana 10 to Grafana 12 after Grafana 10 reached end of support: moved the Grafana and Monitoring extensions to Grafana Unified Alerting and added a datasource health check to fix a post-install race condition.
- Prepared the Node.js backend of an SSL extension for short-lived certificates ahead of the CA/Browser Forum lifetime reductions, adding multiple certificates per order and certificate revocation and reissue endpoints.
- Added PHP 8.4 support to 5 extensions, and restored and expanded CSV export of Plesk lists, increasing the number of exportable lists from 6 to 30.
- Fixed access control vulnerabilities and sensitive data exposure in three extensions.
- Maintained automated tests and Jenkins CI pipelines for about 13 extensions, fixing flaky tests and adapting pipelines during a CI move to another cloud provider.

**Skills**

`PHP` `Node.js` `WHMCS` `Plesk` `Billing systems` `Payment gateways` `Stripe` `PayPal` `Hosting infrastructure` `Grafana` `Monitoring` `Automation` `Automated testing` `Regression testing` `Jenkins` `CI pipelines`

### [HTML Academy](https://htmlacademy.ru/)

**Mentor for PHP Intensive Courses** | November 2019 - December 2021 | Remote, part-time<br>
Saint Petersburg, Russia

Mentoring in two HTML Academy intensive courses: "PHP" (online auction, blog, and task manager training projects) and "PHP and Yii2" (a task marketplace built on Yii2).

**Mentoring**

- Mentored 18 students across four cohorts of both courses and completed about 170 assignment reviews against the course criteria.
- Used Docker to run student projects and check that they worked, in addition to reviewing the code.
- Explained architecture decisions, including MVC, splitting logic between models and controllers, dependency injection, and API versioning, and demonstrated fixes in students' code.
- Held calls with students who struggled to pass an assignment until it was accepted, recommended development and debugging tools (IDE, Xdebug), and took over students transferred from other mentors.

**Final project acceptance**

- Conducted anonymous final acceptance of Yii2 projects by other mentors' students: deployed each project locally, checked startup, migrations, and demo data, and assessed the code against the course criteria and the functionality against the specification.
- Wrote revision notes and decided whether each project was accepted; when a student could not work through the notes, gave examples of fixes.

**Skills**

`PHP` `Yii2` `MySQL` `SQL` `REST API` `Composer` `Docker` `Xdebug` `Code review`

### [Timebook Service LLC](https://wfm.timebook.ru/)

**Developer** | April 2021 - October 2021 | Remote<br>
Nizhny Novgorod, Russia

Backend development for Timebook, a workforce management (WFM) system for time tracking, timesheets, and shift scheduling.

**Timesheets**

- Reworked the calculation of six working-time timesheets (payroll, supplementary, sanitary, and others) for shift types from the new scheduling module, covering lunch breaks, overtime, extra work in another role, and night hours.
- Built a revision timesheet from scratch.
- Added prioritized color highlighting of cells and hints for plan-versus-actual discrepancies: "Undertime", "Unclosed shift", and "Employee did not show up for the shift".

**Shift scheduling and HR scenarios**

- Fixed shift scheduling bugs related to personnel changes: rewrote the check of whether a shift can be assigned to an employee based on hiring, transfer, and dismissal periods.
- Eliminated an extra draft plan created when an employee was transferred to another organization and back on the same date, and covered this scenario with a unit test.
- Improved the cleanup of outdated plans and snapshots, including deletion of document files and period calculation that accounts for time zones.
- Added diagnostic logging to investigate timesheet confirmation errors involving dismissed employees.

**Skills**

`PHP` `Yii` `Yii2` `MySQL` `REST API` `PHPUnit` `Docker` `Docker Compose` `nginx` `Xdebug` `XHProf` `Git` `GitLab` `Redmine`

### Smart Line LLC

**PHP/SQL Developer** | December 2018 - April 2021 | On-site<br>
Saint Petersburg, Russia

Backend and frontend development for several company products: adfind.io, an ad campaign search and analytics service; an internal analytics admin panel; a messaging service; a game aggregator and installer; and a CPA network.

**adfind.io - ad campaign search and analytics service**

- Developed automatic classification of ad creative texts by topic and language: topics are recognized by configurable weighted dictionary detectors, with an admin panel for managing topics and running tagging manually.
- Ported the TextCat n-gram language identification library from Perl to PHP and extended it: moved language models to MySQL, which made detection much faster, and added n-gram operations (about 70 languages). The detection results became search filters for users.
- Added a moderator role, tags, and edit history for creatives; manual tagging is never overwritten by automatic tagging.
- Developed the backend and UI for user features: email registration confirmation, password recovery, segmented email campaigns with a delivery log, and A/B experiments that assign users to variants.
- Built a referral program with referral links, balance credits, withdrawal requests, and a withdrawal report for administrators.
- Localized the service into English: moved server and client texts to translation keys and wrote CLI commands that generate translation files.

**Internal analytics admin panel**

- Developed from scratch the Vue.js frontend of an internal admin panel with product analytics reports.
- Migrated existing reports to Vue.js and built new ones: a base report with groupings, UTM filters, column selection, and LTV; cohort analysis; totals and charts; Excel/CSV export. Report columns are loaded from the server into a shared component, and report settings are saved per user.
- On the backend (PHP, ClickHouse), added an administrator action log, access permissions, and bot traffic filtering in statistics.

**Messaging service API**

- Developed from scratch, to specification, a Symfony REST API for a messaging service between users and administrators, serving a Vue.js admin panel and an embeddable widget.
- Implemented token authentication with a limited lifetime and CSRF protection, conversations and messages with attachments, editing, and statuses, user projects, roles, and CORS for the widget on third-party sites.
- Upgraded the project from Symfony 4 to Symfony 5, prepared fixtures, and set up deployment to test and production servers.

**Game aggregator and installer**

- Built a parser for the feeds and websites of 11 partners: processing is split into per-partner events and listeners (Symfony EventDispatcher, DI container), feeds are loaded in chunks with generators, and screenshots are imported.
- Wrote Yandex Tomita-parser grammars and dictionaries that extract game attributes from free-text descriptions written for human readers.
- Developed a catalog REST API for the desktop client: game lists and pages, search, and installer bundles, described in OpenAPI.
- Built the installer UI embedded in the client with Vue.js and Vuetify: catalog, game page, downloads with progress, and settings.
- Prepared the Docker environment and deployment with Capistrano.

**CPA network**

- Integrated the RoyalPay and Payment Planet payment systems through a shared payment details interface and implemented partner payouts.
- Improved the precision of storing and displaying financial data in statistics, balances, accruals, and payouts.
- Implemented passing traffic source group settings (tags, categories, and blocked tags) to an external RTB platform, and added manual resending of postbacks.

**Skills**

`PHP` `Symfony` `Doctrine` `Sonata Admin` `REST API` `OpenAPI` `MySQL` `MariaDB` `ClickHouse` `SQL` `JavaScript` `Vue.js` `Vuex` `Vuetify` `Yandex Tomita-parser` `TextCat` `NLP` `Docker` `Capistrano` `GitFlow` `Payment gateways` `CPA networks`

### [REG.RU](https://www.reg.ru/) - Domain Registration, Web Hosting, and VPS Services

**PHP/SQL Developer** | December 2017 - October 2018 | Remote<br>
Moscow, Russia

Backend development in a small team for Effect.com, a website widget for online chat and callback requests, with calls made through an Asterisk telephony server. The service was built as microservices: a Slim core with an admin panel (REST/JSON), a Yii2 widget API and balance service, communicating through a message routing service.

**Billing**

- Developed a Yii2 balance service that tracks client top-ups and charges, controls remaining balances, and recalculates them when a client changes plans.
- Implemented prepaid plans configurable in the admin panel, low-balance handling (client notification, widget suspension, and resumption after a top-up through Yandex.Kassa), and payment and charge history in the client account.

**Widget API and messenger integrations**

- Took part in extracting the widget API into a separate Yii2 microservice with GraphQL for the new Angular version of the widget.
- Took part in developing the widget chat backend and the Slack and Viber integrations: visitors could leave a phone number or a messenger account or write in the chat, and site owners contacted them by phone or messenger and replied from the admin panel or directly from Slack or Viber.

**Asterisk integration and admin panel**

- Worked on the integration code with the Asterisk telephony server: built call requests, retrieved call statistics for balance charges and the call list, and checked the call flow from a widget request to a connected call.
- Improved and fixed the admin panel in the Slim core: widget display scenarios based on visitor behavior and widget display settings.

**Testing, query optimization, and blog**

- For each task, maintained Codeception and Selenium automated tests: ran them on the branch before development, fixed existing tests and added new ones after the changes, deployed the branch to staging through CI (Atlassian tools), and closed the task only after a successful run.
- Analyzed slow MySQL queries with EXPLAIN.
- Developed a WordPress blog and a plugin that serves recent posts over XML-RPC to a section of the Effect.com website.

**Skills**

`PHP` `Yii2` `Slim` `REST API` `GraphQL` `MySQL` `SQL` `Microservice architecture` `Asterisk` `Angular` `Billing systems` `Slack` `Viber` `Codeception` `Selenium` `Automated testing` `WordPress` `XML-RPC`

### Sole Proprietor Konstantin Borisovich Gromov

**1C Developer** | July 2016 - September 2017 | On-site<br>
Saint Petersburg, Russia

- Developed a 1C inventory management system for stock tracking and operational reporting.
- Integrated the 1C accounting system with the company website to connect business workflows.

### [T.T. Consulting](https://ttcsoft.ru/)

**Web Developer** | May 2014 - June 2016 | On-site<br>
Saint Petersburg, Russia

- Developed and maintained backend functionality for client websites using PHP, MySQL, and JavaScript.
- Integrated 1C with client websites to support business workflows.
- Maintained custom web applications and content systems built with Joomla + VirtueMart, Drupal, and NetCat.

### Rossite LLC

**Web Developer** | March 2014 - May 2014 | On-site<br>
Saint Petersburg, Russia

- Built Joomla websites and implemented HTML/CSS layouts for client requirements.
- Customized module code, integrated templates, and maintained website content.

### Kompik Trading House LLC

**Content Manager** | January 2014 - March 2014 | Remote<br>
Saint Petersburg, Russia

- Created and updated product pages in Joomla CMS for the online catalog.
- Sourced and edited product images and wrote descriptions for storefront publication.

### Kario.ru LLC

**Content Manager** | December 2012 - January 2014 | On-site<br>
Saint Petersburg, Russia

- Prepared supplier price lists in Microsoft Excel for import into the 1C database.
- Added product images and technical specifications to Bitrix CMS pages.

### ECOS Implementation Center LLC

**1C Developer** | August 2007 - October 2009 | On-site<br>
Saint Petersburg, Russia

- Analyzed accounting processes and corrected errors in client databases.
- Modified standard 1C configurations to meet customer requirements and support business workflows.
- Installed and updated 1C software in client environments.

## Skills

### Backend & Data

`PHP` `Yii2` `Symfony` `Slim` `Doctrine` `Node.js` `Python` `LangGraph` `MySQL` `MariaDB` `ClickHouse` `SQL` `REST API` `OpenAPI` `GraphQL` `Composer` `Microservice architecture`

### Text Processing & NLP

`NLP` `Text classification` `Language identification` `Information extraction` `Regular expressions` `TextCat` `Yandex Tomita-parser`

### Frontend & CMS

`JavaScript` `Angular` `Vue.js` `Vuex` `Vuetify` `React` `jQuery` `Bootstrap` `WordPress` `Joomla` `Drupal` `NetCat` `Bitrix`

### Infrastructure & Business Systems

`WHMCS` `Plesk` `Billing systems` `Payment gateways` `Stripe` `PayPal` `Hosting infrastructure` `Grafana` `Monitoring` `Automation` `Docker` `Docker Compose` `nginx` `Capistrano` `Xdebug` `XHProf` `CPA networks` `Asterisk` `CRM` `1C`

### Testing & CI

`Automated testing` `Regression testing` `PHPUnit` `Codeception` `Selenium` `Jenkins` `CI pipelines` `Code review`

## Education

### [Moscow Technological Institute](https://www.linkedin.com/company/moscow-technological-institute/)

**Bachelor of Technology, Software Development Technologies**<br>
August 2017 - April 2022

## Languages

- **Russian:** Native
- **English:** B1 / Limited working proficiency
- **Bulgarian:** Elementary proficiency

## Certifications

### Language proficiency

- [Duolingo English Test](https://certs.duolingo.com/hzfidxvyz3g0fjwp)

### Learning platforms

- [GitHub Foundations](https://learn.microsoft.com/en-us/users/57088098/credentials/9889d5bdc5074ddf)
- [Docker Foundations Professional](https://www.linkedin.com/learning/certificates/45095e93af8d4d4e19c92b481a3e0e509b935289b7ad3ac0eec3cfe0e897a4a2)
- [Introduction to LangGraph - Python (LangChain Academy)](https://academy.langchain.com/certificates/pvnjvjy3rf)

### Other

- Introduction to Relational Databases
- PHP 5.2 Web Programming
- The Basics of Programming with JavaScript

## Contact

- [LinkedIn](https://www.linkedin.com/in/webprogrammist)
- [GitHub](https://github.com/oegir)
- [Facebook](https://www.facebook.com/aleksei.336862/)