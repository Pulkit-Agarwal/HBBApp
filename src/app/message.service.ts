import { BehaviorSubject } from "rxjs";

export class MessageService {
    private behaviorSubject = new BehaviorSubject<any>(null);
    currentMsg$ = this.behaviorSubject.asObservable();

    post(message) {
        this.behaviorSubject.next(message);
    }
}