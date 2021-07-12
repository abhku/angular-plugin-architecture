import { COMPILER_OPTIONS, CompilerFactory, Compiler, NgModule } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';

export function createCompiler(fn: CompilerFactory): Compiler {
    return fn.createCompiler();
}

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        MessageComponent,
    ],
    providers: [{
        provide: COMPILER_OPTIONS,
        useValue: {},
        multi: true
    },
    {
        provide: CompilerFactory,
        useClass: JitCompilerFactory,
        deps: [COMPILER_OPTIONS]
    },
    {
        provide: Compiler,
        useFactory: createCompiler,
        deps: [CompilerFactory]
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
