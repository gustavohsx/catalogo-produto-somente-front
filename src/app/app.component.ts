import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProdutoModel } from '../model/produto.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'catalogo-produtos-somente-front';

  produtos: ProdutoModel[] = [
    {
      id: 1,
      nome: '2811 PRETA 60 LEDS/METRO 12V',
      preco: 25.00,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_605214-MLB53108450821_122022-O-fita-led-ws2811-1-metro-60-leds-12v-compativel-ajk-power-vu.webp'
    },
    {
      id: 2,
      nome: '2811 BRANCA 60 LEDS/METRO 12V',
      preco: 25.00,
      urlImagem: 'https://s.alicdn.com/@sc04/kf/HTB1vZERaAL0gK0jSZFAq6AA9pXax.jpg_720x720q50.jpg'
    },
    {
      id: 3,
      nome: '2812 PRETA 60 LEDS/METRO 5V',
      preco: 27.00,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_754837-MLB74888227553_032024-O-fita-de-led-ws2815-enderecavel-1-metro-60-leds-12-volts.webp'
    },
    {
      id: 4,
      nome: '2815 PRETA 60 LEDS/METRO 12V',
      preco: 35.00,
      urlImagem: 'https://m.media-amazon.com/images/I/61awj-1sFUL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 4,
      nome: '2815 PRETA 60 LEDS/METRO',
      preco: 35.00,
      urlImagem: 'https://m.media-amazon.com/images/I/61awj-1sFUL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 4,
      nome: '2815 PRETA 60 LEDS/METRO',
      preco: 35.00,
      urlImagem: 'https://m.media-amazon.com/images/I/61awj-1sFUL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 4,
      nome: '2815 PRETA 60 LEDS/METRO',
      preco: 35.00,
      urlImagem: 'https://m.media-amazon.com/images/I/61awj-1sFUL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 4,
      nome: 'FITA LED BRANCO FRIO 6K 5 METROS 600 LEDS 12V',
      preco: 25.00,
      urlImagem: 'https://cdn.awsli.com.br/600x450/1933/1933518/produto/334913612/3528-6000--4--0uck6gkw05.jpg'
    },
    {
      id: 4,
      nome: 'FITA LED BRANCO NATURAL 4K 5 METROS 600 LEDS 12V',
      preco: 25.00,
      urlImagem: 'https://cdn.awsli.com.br/600x450/1933/1933518/produto/334913471/3528-4000--6--kwl6v7wiew.jpg'
    },
    {
      id: 4,
      nome: 'CONTROLADORA FITA LED DIGITAL USB CONTROLE',
      preco: 30.00,
      urlImagem: 'https://cdn.awsli.com.br/2500x2500/1933/1933518/produto/335075040/central-2812--2--h11q1hds5j.jpg'
    },
    {
      id: 4,
      nome: 'CONTROLADORA FITA LED DIGITAL DC CONTROLE',
      preco: 30.00,
      urlImagem: 'https://cdn.awsli.com.br/2500x2500/1933/1933518/produto/335074927/central-2811--2--8wvwwgsd67.jpg'
    },
    {
      id: 4,
      nome: 'CONTROLADORA FITA LED DIGITAL VU MUSICA DC CONTROLE',
      preco: 30.00,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_829651-MLB89754061108_082025-O.webp'
    },
    {
      id: 4,
      nome: 'CONTROLADORA FITA LED DIGITAL VU MUSICA SP107E BLUETOOTH',
      preco: 30.00,
      urlImagem: 'https://images.tcdn.com.br/img/img_prod/791419/controlador_led_bluetooth_sp107e_para_led_rgb_digital_13501_1_2fd920b3957b1dfe2da1b4a6a549d532.jpeg'
    },
    {
      id: 4,
      nome: 'TOMADA INTELIGENTE',
      preco: 60.00,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_867108-MLB84586057271_052025-O-tomada-inteligente-wifi-16a-alexa-google-monitor-automaco.webp'
    },
  ];

  comprarProduto(produto: ProdutoModel) {

  }
}
