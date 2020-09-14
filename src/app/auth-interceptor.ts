import {Injectable, OnInit} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { AuthenticatedService } from './authenticated.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticatedService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken;

        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }

        });

        return next.handle(authReq);
    }

    }

    
