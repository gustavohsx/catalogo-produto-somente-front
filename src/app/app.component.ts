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
  title = 'Catálogo de Produtos - GHSX Store';

  produtos: ProdutoModel[] = [
    {
      id: 1,
      nome: '2811 PRETA 60 LEDS/METRO 12V',
      preco: 26.31,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_605214-MLB53108450821_122022-O-fita-led-ws2811-1-metro-60-leds-12v-compativel-ajk-power-vu.webp'
    },
    {
      id: 2,
      nome: '2811 BRANCA 60 LEDS/METRO 12V',
      preco: 26.31,
      urlImagem: 'https://s.alicdn.com/@sc04/kf/HTB1vZERaAL0gK0jSZFAq6AA9pXax.jpg_720x720q50.jpg'
    },
    {
      id: 12,
      nome: 'CONTROLADORA FITA LED DIGITAL DC CONTROLE',
      preco: 31.57,
      urlImagem: 'https://cdn.awsli.com.br/2500x2500/1933/1933518/produto/335074927/central-2811--2--8wvwwgsd67.jpg'
    },
    {
      id: 3,
      nome: '2812 PRETA 60 LEDS/METRO 5V',
      preco: 28.42,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_754837-MLB74888227553_032024-O-fita-de-led-ws2815-enderecavel-1-metro-60-leds-12-volts.webp'
    },
    {
      id: 11,
      nome: 'CONTROLADORA FITA LED DIGITAL USB CONTROLE',
      preco: 31.57,
      urlImagem: 'https://cdn.awsli.com.br/2500x2500/1933/1933518/produto/335075040/central-2812--2--h11q1hds5j.jpg'
    },
    {
      id: 4,
      nome: '2815 PRETA 60 LEDS/METRO 12V',
      preco: 36.83,
      urlImagem: 'https://m.media-amazon.com/images/I/61awj-1sFUL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 13,
      nome: 'CONTROLADORA FITA LED DIGITAL VU MUSICA DC CONTROLE',
      preco: 31.57,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_829651-MLB89754061108_082025-O.webp'
    },
    {
      id: 5,
      nome: '2815 PRETA 144 LEDS/METRO 12V',
      preco: 105.24,
      urlImagem: 'https://img.derunledlights.com/uploads/2022/03/dc12v-144leds-ws2815-led-strip-lights.jpg'
    },
    {
      id: 8,
      nome: '2815 BRANCA 144 LEDS/METRO 12V',
      preco: 105.24,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_703965-MLB83370357087_032025-O.webp'
    },
    {
      id: 14,
      nome: 'CONTROLADORA FITA LED DIGITAL VU MUSICA SP107E BLUETOOTH',
      preco: 94.72,
      urlImagem: 'https://images.tcdn.com.br/img/img_prod/791419/controlador_led_bluetooth_sp107e_para_led_rgb_digital_13501_1_2fd920b3957b1dfe2da1b4a6a549d532.jpeg'
    },
    {
      id: 6,
      nome: '2811 PRETA 144 LEDS/METRO 12V',
      preco: 94.72,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_915877-MLU69593532219_052023-O.webp'
    },
    {
      id: 7,
      nome: '2811 BRANCA 144 LEDS/METRO 12V',
      preco: 94.72,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_687572-MLA80702473231_112024-O.webp'
    },
    {
      id: 9,
      nome: 'FITA LED BRANCO FRIO 6K 5 METROS 600 LEDS 12V',
      preco: 26.31,
      urlImagem: 'https://cdn.awsli.com.br/600x450/1933/1933518/produto/334913612/3528-6000--4--0uck6gkw05.jpg'
    },
    {
      id: 10,
      nome: 'FITA LED BRANCO NATURAL 4K 5 METROS 600 LEDS 12V',
      preco: 26.31,
      urlImagem: 'https://cdn.awsli.com.br/600x450/1933/1933518/produto/334913471/3528-4000--6--kwl6v7wiew.jpg'
    },
    {
      id: 20,
      nome: 'CENTRAL DIMMER FITA LED CONTROLE AJUSTÁVEL 5-25V',
      preco: 26.31,
      urlImagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/147842197/a9d275d35e844c858812572a5d7be90a.jpg?v=638516966204630000'
    },
    {
      id: 15,
      nome: 'TOMADA INTELIGENTE',
      preco: 67.89,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_867108-MLB84586057271_052025-O-tomada-inteligente-wifi-16a-alexa-google-monitor-automaco.webp'
    },
    {
      id: 16,
      nome: 'BOTÃO TIC TAC 1,3x1,2x1,7CM',
      preco: 2.63,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_899608-MLB91637390637_092025-O.webp'
    },
    {
      id: 17,
      nome: 'PAINEL LED FLEXIVEL 16X64 PIXELS',
      preco: 294.67,
      urlImagem: 'https://http2.mlstatic.com/D_NQ_NP_703534-MLB92580417777_092025-O-painel-led-flexivel-colorido-virtuafx-39x10cm-oled.webp'
    },
    {
      id: 18,
      nome: 'PAINEL LED FLEXIVEL 20X64 PIXELS',
      preco: 315.72,
      urlImagem: 'https://down-br.img.susercontent.com/file/br-11134207-81z1k-meyq2zofiznqcb'
    },
    {
      id: 19,
      nome: 'PEN DRIVE KODAK 64GB METAL',
      preco: 60.00,
      urlImagem: 'https://ae-pic-a1.aliexpress-media.com/kf/S04928e7dfb1e4cf698a738eee1d0c0d1U.jpg'
    },
  ];

  constructor() {
    window.document.title = this.title;
  }

  abrirWhatsapp() {
    const nomeURL = encodeURIComponent('Olá, gostaria de ajudar com alguns produtos do site https://store.gustavohsx.com !');
    window.open(`https://wa.me/558296293198?text=${nomeURL}`, '_blank');
  }

  abrirInstagram() {
    const url = 'https://www.instagram.com/ghsx.store/';
    window.open(url, '_blank');
  }

  comprarProduto(produto: ProdutoModel) {
    const nomeTemp = 'Olá, tenho interesse no produto: ' + produto.nome + ' - R$ ' + produto.preco;
    const nomeURL = encodeURIComponent(nomeTemp);
    window.open(`https://wa.me/558296293198?text=${nomeURL}`, '_blank');
  }
}
