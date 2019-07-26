import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import ITitleMeta from './interfaces/ITitleMeta';

@Injectable({
  providedIn: 'root'
})
export class SetTitleAndMetaService {
  item: ITitleMeta;
  setTitle$: Observable<any>;
  private setMenuSubject = new Subject<any>();

  constructor(
    private title: Title,
    private meta: Meta,
  ) {
  }

  setTitleAndMeta(data?: ITitleMeta): void {
    if (data === null) {
      return;
    }
    this.item = data;
    this.addTitleAndMeta(this.title, this.meta, this.item);
  }

  private addTitleAndMeta(title: Title, meta: Meta, item: ITitleMeta): void {
    title.setTitle(item.title);

    meta.addTag({ name: 'description', content: item.description });
    meta.addTag({ name: 'twitter:card', content: 'summary' });
    meta.addTag({ name: 'twitter:site', content: '@AngularUniv' });
    meta.addTag({ name: 'twitter:title', content: item.description });
    meta.addTag({ name: 'twitter:description', content: item.description });
    meta.addTag({ name: 'twitter:text:description', content: item.description });
    meta.addTag({ name: 'twitter:image', content: 'https://avatars3.githubusercontent.com/u/16628445?v=3&s=200' });
  }
}
