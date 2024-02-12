import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../model/interface';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Iplayers[],search:string,selectValue:string): Iplayers[] {
    let filterArr:Iplayers[] = value
    if(!value){
      return value
    }
    if(!search){
      return value
    }
    if(selectValue === `name`){
      filterArr = value.filter(play => {
        return play.name.toLowerCase().includes(search.trim().toLowerCase())
      })
      
    }else if(selectValue === `team`){
      filterArr =  value.filter(play => {
        return play.team.toLowerCase().includes(search.trim().toLowerCase())
      })
    }else if(selectValue === `odiRuns`){
      let minNumber = Math.floor(+search / 1000 ) * 1000;
      let maxNumber = minNumber + 1000
      
      filterArr = value.filter(play => {
        return play.odiRuns >= minNumber && play.odiRuns <= maxNumber
      })
    }else if(selectValue === `testRuns` ){
      let minNumber = Math.floor(+search / 1000 ) * 1000;
      let maxNumber = minNumber + 1000
      
      filterArr = value.filter(play => {
        return play.testRuns >= minNumber && play.testRuns <= maxNumber
      })
    }else if(selectValue === `yearDebut`){
      let minNumber = Math.floor(+search / 10 ) * 10;
      let maxNumber = minNumber + 10
      
      filterArr = value.filter(play => {
        return play.yearDebut >= minNumber && play.yearDebut <= maxNumber
      })
    }
    return filterArr 
  }

}

// let x = 100;
// {
//     console.log(x);
//     let x = 200;
//     console.log(x); 
// }

let x = 100;
{
    console.log(x); 
    let y = 200;
    console.log(y); 
}