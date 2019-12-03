import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import * as AWS from 'aws-sdk';
import credentials from '../../../aws-credentials';

AWS.config.update({
  region: 'us-east-2',
  accessKeyId: credentials.accessKey,
  secretAccessKey: credentials.secretKey
});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  redirectURL: string;
  errMsg = false;

  users: any[] = [];

  dynamodb = new AWS.DynamoDB();
  docClient = new AWS.DynamoDB.DocumentClient();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    const paramsUsers = {
      TableName: 'Usuarios'
    };

    // OBTENER USUARIOS
    this.docClient.scan(paramsUsers, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.fillUsers(data.Items);
        console.log('users: ', this.users);
      }
    });
  }

  logIn() {
    this.users.forEach(element => {
      if ((element.email === this.formLogin.value.email) && (element.password === this.formLogin.value.password)) {
        console.log('Usuario validado: ', element.email, element.password);
        this.router.navigate(['/home']);
      } else {
        this.errMsg = true;
      }
    });

  }

  fillUsers(data: any[] | AWS.DynamoDB.DocumentClient.AttributeMap[]) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {
      this.users.push(data[i]);
    }
  }
}
