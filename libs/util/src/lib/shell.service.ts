import { Routes, Route } from '@angular/router';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return The new route using shell as the base.
     */
    static childRoutes(ShellComponent: any, routes: Routes, canActivateGuards: any[]): Route {
        return {
            path: '',
            component: ShellComponent,
            children: routes,
            canActivate: canActivateGuards,
            // Reuse ShellComponent instance when navigating between child views
            data: { reuse: true }
        };
    }
}
