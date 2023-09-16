import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WnbPageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
    let component: WnbPageHeaderComponent;
    let fixture: ComponentFixture<WnbPageHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WnbPageHeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(WnbPageHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
