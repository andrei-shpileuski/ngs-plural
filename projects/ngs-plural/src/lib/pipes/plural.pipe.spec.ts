import { TestBed } from '@angular/core/testing';
import { PluralPipe } from './plural.pipe';
import { PluralizationService } from '../services/injectable/pluralization.service';

describe('PluralPipe', () => {
  let pipe: PluralPipe;
  let pluralizationService: PluralizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PluralPipe, PluralizationService],
    });

    pipe = TestBed.inject(PluralPipe);
    pluralizationService = TestBed.inject(PluralizationService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
