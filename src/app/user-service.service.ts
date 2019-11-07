import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const headeroption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  printMessage = '';
  issueBookList: any = [];
  selectedUser:any = {
    userId: '',
    userName: '',
    userEmail: '',
    userRole: ''  
  };

  studentBookRequest = {
    userId : '',
    bookId : '',
  };

  selectedBook = {
    bookId: '',
    bookName: '',
    authorName: '',
    category: ''
  };

  url: string = 'http://localhost:8086/admin';
  url1: string = 'http://localhost:8086/library';
  url2: string = 'http://localhost:8086/student';
  form: any;
  constructor(private http: HttpClient) { }
  addUser(data) {
    return this.http.post(`${this.url}/add`, data, headeroption);
  }

  userLogin(data) {
    return this.http.get(`${this.url,this.url1,this.url2}/login?userName=${data.email}&password=${data.password}`);
  }

  users: any = [];
  getAllUsers() {
    this.http.get(`${this.url}/getallusers`).pipe(map(resData => {
      let userArr = [];
      for (let val in resData) {
        userArr.push(resData[val]);
      }
      return userArr;
    })).subscribe(data => {
      this.users = data;
    }, err => {
      console.log(err);
    });
}
removeUser(email) {
  return this.http.delete(`${this.url}/remove/${email}`, headeroption);
}
updateUser(data) {
  return this.http.put(`${this.url}/modify`, data, headeroption);
}
addBook(data) {
  return this.http.post(`${this.url1}/registerbook`, data, headeroption);
}

books: any = [];
getAllBook() {
  this.http.get(`${this.url1}/getallbooks`).pipe(map(resData => {
    let bookArr = [];
    for (let val in resData) {
      bookArr.push(resData[val]);
    }
    return bookArr;
  })).subscribe(data => {
    this.books = data;
  }, err => {
    console.log(err);
  });

}

updateBook(data) {
  return this.http.put(`${this.url1}/modifybook`, data, headeroption);
}

removeBook(id) {
  return this.http.delete(`${this.url1}/removebook/${id}`, headeroption);
}

accepBookIssueRequest(userId, bookId) {
  return this.http.get(`${this.url1}/acceptBookRequest?userId=${userId}&bookId=${bookId}`);
}

showIssueBooks() {
  this.http.get(`${this.url2}/getIssueBooks?userId=${localStorage.getItem('reqUserId')}`).pipe(map(resData => {
    let bookArr = [];
    for (let val in resData) {
      bookArr.push(resData[val]);
    }
    return bookArr;
  })).subscribe(data => {
    this.issueBookList = data;
  }, err => {
    console.log(err);
  });
}
returnBook(book){
  return this.http. delete(`${this.url1}/returnBook?bookId=${book.bookId}`);
}
searchUsers:any=[];
  searchByName(userNAme){
    this.http.get(`${this.url}/getByName?userName=${userNAme}`).pipe(map(resData => {
      let userArr = [];
      for (let val in resData) {
        userArr.push(resData[val]);
      }
      return userArr;
    })).subscribe(data => {
      this.searchUsers = data;
      console.log('hello');
    }, err => {
      console.log(err);
    });
  }
}
