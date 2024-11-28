import { TestBed } from '@angular/core/testing';
import { PluralizationLocalPipe } from './pluralization-local.pipe';
import { PluralizationService } from '../services/injectable/pluralization.service';

describe('PluralizationLocalPipe', () => {
  let pipe: PluralizationLocalPipe;
  let pluralizationService: PluralizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PluralizationLocalPipe, PluralizationService],
    });

    pipe = TestBed.inject(PluralizationLocalPipe);
    pluralizationService = TestBed.inject(PluralizationService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
