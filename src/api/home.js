import {get} from './index';

let baseUrl='http://localhost:5000';
export function getSliderApi(){
    return get(`${baseUrl}/slider`);
}

export function getLessonListApi(selectLessonId,offset,limit){
    return get(`${baseUrl}/slider/${selectLessonId}/${offset}/${limit}`);
}