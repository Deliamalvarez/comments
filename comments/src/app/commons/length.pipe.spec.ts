import { TruncatePipe } from './length.pipe';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should create an instance', ()=>{
    expect(pipe).toBeTruthy();
  });

  it('should return null', ()=>{
    expect(pipe.transform(null)).toEqual(null);
  });

  it('should return text truncated with length 20 and default trail', ()=>{
    const expected = text.substring(0, 20) + '...';
    expect(pipe.transform(text).toString()).toEqual(expected);
  });

  it('should return text truncated with length 10 and custom trail', ()=>{
    const expected = text.substring(0, 10) + '***';
    expect(pipe.transform(text, ['10', '***']).toString()).toEqual(expected);
  });

});
