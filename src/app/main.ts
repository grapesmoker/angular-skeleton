import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'hammerjs';

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
