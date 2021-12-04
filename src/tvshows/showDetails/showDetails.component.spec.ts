import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowDetailsComponent } from './showDetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TvShowsService } from '../tvshows.service';

describe('ShowDetailsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
        
      ],
      declarations: [
        ShowDetailsComponent
      ],
      providers: [TvShowsService]
    }).compileComponents();
  });


  it('should create the show details component', () => {
    const fixture = TestBed.createComponent(ShowDetailsComponent);
    const showDetails = fixture.debugElement.componentInstance;
    expect(showDetails).toBeTruthy();
  });

  it(`should have as title 'Show Info'`, () => {
    const fixture = TestBed.createComponent(ShowDetailsComponent);
    const showDetails = fixture.debugElement.componentInstance;
    expect(showDetails.showDetailsTitle).toEqual('Show Info');
  });

  it('should be created Service', () => {
    const service: TvShowsService = TestBed.get(TvShowsService);
    expect(service).toBeTruthy();
   });

   it('should have getShowById function', () => {
    const service: TvShowsService = TestBed.get(TvShowsService);
    expect(service.getShowById(1)).toBeTruthy();
   });

   it('should have getShowCast function', () => {
    const service: TvShowsService = TestBed.get(TvShowsService);
    expect(service.getShowCast(1)).toBeTruthy();
   });

});