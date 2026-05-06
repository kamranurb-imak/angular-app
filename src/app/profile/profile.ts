import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  userName: string | null = null;
  userId: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() : void {
    console.log(this.route.snapshot.paramMap.get('name'));
    //OR
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const name = params.get('name');
      if(id) {
        this.userName = name;
        this.userId = id ? parseInt(id, 10) : null;
      }
      console.log(`Received ID: ${id}, Name: ${name}`);
    });

    this.route.queryParamMap.subscribe(params => {
      const Id = params.get('id');
      const Name = params.get('name');
      console.log(`Received Query ID: ${Id}, Query Name: ${Name}`);
      if(Id) {
        this.userName = Name;
        this.userId = Id ? parseInt(Id, 10) : null;
      }
    });
  }

}
