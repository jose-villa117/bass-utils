import { Component } from '@angular/core';
import {
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  ColComponent,
  FormCheckLabelDirective, FormControlDirective, FormLabelDirective, FormSelectDirective,
  GutterDirective,
  ProgressComponent,
  RowComponent
} from '@coreui/angular';
import { ChartjsComponent } from "@coreui/angular-chartjs";
import { IconDirective } from "@coreui/icons-angular";
import { ReactiveFormsModule } from "@angular/forms";
import { Option } from "../../core/options/options.types";

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    ButtonDirective,
    ButtonGroupComponent,
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    ChartjsComponent,
    ColComponent,
    FormCheckLabelDirective,
    IconDirective,
    ProgressComponent,
    ReactiveFormsModule,
    RowComponent,
    GutterDirective,
    FormControlDirective,
    FormSelectDirective,
    FormLabelDirective
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',

})
export class DemoComponent {
  note: string | null = null;
  attack: string | null = null;
  mode: string | null = null;
  notes: Option[] = [
    {
      id: 1,
      description: 'C'
    },
    {
      id: 2,
      description: 'Db'
    },
    {
      id: 3,
      description: 'D'
    },
    {
      id: 4,
      description: 'Eb'
    },
    {
      id: 5,
      description: 'E'
    },
    {
      id: 6,
      description: 'F'
    },
    {
      id: 7,
      description: 'Gb'
    },
    {
      id: 8,
      description: 'Gb'
    },
    {
      id: 9,
      description: 'Ab'
    },
    {
      id: 10,
      description: 'A'
    },
    {
      id: 11,
      description: 'Bb'
    },
    {
      id: 12,
      description: 'B'
    }
  ];

  modes: Option[] = [
    {
      id: 1,
      description: 'Jónico'
    },
    {
      id: 2,
      description: 'Dórico'
    },
    {
      id: 3,
      description: 'Frigio'
    },
    {
      id: 4,
      description: 'Lidio'
    },
    {
      id: 5,
      description: 'Mixolidio'
    },
    {
      id: 6,
      description: 'Eólico'
    },
    {
      id: 7,
      description: 'Locrio'
    },
  ];

  attacks: Option[] = [
    {
      id: 1,
      description: '1'
    },
    {
      id: 2,
      description: '2'
    },
    {
      id: 3,
      description: '3'
    },
    {
      id: 4,
      description: '4'
    }
  ];

  constructor() {

  }

  generate(){
    const noteIndex = Math.floor(Math.random() * this.notes.length);
    const modeIndex = Math.floor(Math.random() * this.modes.length);
    const attackIndex = Math.floor(Math.random() * this.attacks.length);

    this.note = this.notes[noteIndex].description;
    this.mode = this.modes[modeIndex].description;
    this.attack = this.attacks[attackIndex].description;
  }

}
