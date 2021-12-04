import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                HeaderComponent
            ],
        }).compileComponents();
    });


    it('should create the header component', () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const header = fixture.debugElement.componentInstance;
        expect(header).toBeTruthy();
    });

    it(`should have as title 'Shows'`, () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const header = fixture.debugElement.componentInstance;
        expect(header.headerTitle).toEqual('Shows');
    });

    it('should set image logo path as expected', () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const header = fixture.debugElement.componentInstance;
        const ele = fixture.debugElement.nativeElement.querySelectorAll('img');
        expect(ele[0]['src']).toContain('http://localhost:9876/assets/img/tv-icons.png');
    });

});
