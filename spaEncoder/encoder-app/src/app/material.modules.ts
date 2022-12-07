import{NgModule} from'@angular/core'
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatListModule,MatListItem} from '@angular/material/list'

@NgModule({
    imports:[
        MatButtonModule,
        MatInputModule,
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
      ],
    exports:[
        MatButtonModule,
        MatInputModule,
        MatSidenavModule,
        MatMenuModule,
        MatToolbarModule,
        MatListModule,
        MatListItem,
        MatCardModule
    ]
})
export class MaterialModules{}