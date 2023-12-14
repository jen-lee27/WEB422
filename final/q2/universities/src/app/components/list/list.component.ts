import { Component, Input } from '@angular/core';
import { Uni } from '../../interfaces/uni';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  list: Uni[] = [];
  allList: Uni[] = [];
  @Input() region: string = "";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.region);
    if (!this.dataService.isFetch) {
      this.dataService.getList().subscribe((data: Uni[]) => {
        this.list = this.allList = data;
        this.dataService.setUniversities(data);
      })
    }
    if(this.region === "ontario") {
      this.list = this.dataService.getOntarioUniversities();
    } else if (this.region === "quebec") {
      this.list = this.dataService.getQuebecUniversities();
    } else if (this.region === "alberta") {
      this.list = this.dataService.getAlbertaUniversities();
    } else {
      this.list = this.dataService.getUniversities();
    }
  }
  
  deleteRecord(name: string) {
    this.dataService.removeData(name);
    if(this.region === "ontario") {
      this.list = this.dataService.getOntarioUniversities();
    } else if (this.region === "quebec") {
      this.list = this.dataService.getQuebecUniversities();
    } else if (this.region === "alberta") {
      this.list = this.dataService.getAlbertaUniversities();
    } else {
      this.list = this.dataService.getUniversities();
    }
  }
}
