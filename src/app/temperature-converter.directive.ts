import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTemperatureConverter]'
})
export class TemperatureConverterDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const fahrenheit = parseFloat(value);
    const celsius = ((fahrenheit - 32) * 5) / 9;
    const formattedCelsius = celsius.toFixed(2); // Display Celsius with 2 decimal places

    // Apply color based on temperature range
    if (celsius >= 30) {
      this.applyColor('red'); // Hot
    } else if (celsius >= 10) {
      this.applyColor('green'); // Normal
    } else {
      this.applyColor('blue'); // Cold
    }

    // Update input value
    this.el.nativeElement.value = formattedCelsius;
  }

  private applyColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
