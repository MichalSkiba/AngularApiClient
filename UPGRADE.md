# Angular 5 to Angular 22

* Requires Node 24.15+, Angular 22.2 and TypeScript 6.0.
* Migrated from old NgModule to standalone component and HttpClient.
* Replaced obsolete ng2-search-filter and ngx-pagination with native filtering/pagination.
* The UI is simplified compared with the original project and must be reviewed.
* The API is same-origin /api; local ng serve proxies to localhost:8080.
* Run npm install to regenerate package-lock.json; old lock belonged to Angular 5.
* CI checks bundle build only, not integration with the API.
