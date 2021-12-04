import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TvShowsService } from '../tvshows.service';

describe('DashboardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
        
      ],
      declarations: [
        DashboardComponent
      ],
      providers: [TvShowsService]
    }).compileComponents();
  });

  it('should create the dashboard component', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboard = fixture.debugElement.componentInstance;
    expect(dashboard).toBeTruthy();
  });

  it(`should have as title 'Dashboard'`, () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const dashboard = fixture.debugElement.componentInstance;
    expect(dashboard.title).toEqual('Dashboard');
  });

  it('should be created Service', () => {
    const service: TvShowsService = TestBed.get(TvShowsService);
    expect(service).toBeTruthy();
   });

   it('should have getAllShows function', () => {
    const service: TvShowsService = TestBed.get(TvShowsService);
    expect(service.getAllShows()).toBeTruthy();
   });

});