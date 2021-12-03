import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchComponent } from './search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TvShowsService } from '../tvshows.service';

describe('SearchComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
        
      ],
      declarations: [
        SearchComponent
      ],
      providers: [TvShowsService]
    }).compileComponents();
  });


  it('should create the serach component', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const search = fixture.debugElement.componentInstance;
    expect(search).toBeTruthy();
  });

  it(`should have as title 'Search Shows'`, () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const search = fixture.debugElement.componentInstance;
    expect(search.searchTitle).toEqual('Search Shows');
  });

  it('should be created Service', () => {
    const service: TvShowsService = TestBed.get(TvShowsService);
    expect(service).toBeTruthy();
   });

   it('should have getShowSearch function', () => {
    const service: TvShowsService = TestBed.get(TvShowsService);
    expect(service.getShowSearch("girls")).toBeTruthy();
   });

});