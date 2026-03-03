import { Injectable } from '@angular/core';
import { title } from 'process';
import { Poem } from '../store/poems.reducer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoemService {

  poems: Poem[] = [
    {
      "title": "À toi",
      "author": "Paul Élouard",
      "poem": "Je t’aime pour toutes les femmes que je n’ai pas connues\nJe t’aime pour tous les temps où je n’ai pas vécu\nPour l’odeur du grand large et de l’aventure\nPour la saveur du fruit défendu.\n\nJe t’aime pour tout ce qui n’est pas à moi\nPour l’immensité de mes désirs inassouvis\nPour la solitude des nuits sans toi\nEt pour l’écho de ton rire dans ma vie."
    },
    {
      "title": "Ton sourire",
      "author": "Victor Hugo",
      "poem": "Quand ton sourire éclaire ma journée,\nLe monde entier semble s’arrêter.\nTes yeux sont deux étoiles dans la nuit,\nEt ton cœur, un refuge où je m’abrite.\n\nJe ne sais pas ce que vaut l’éternité,\nMais je sais que sans toi, je ne suis qu’à moitié."
    },
    {
      "title": "L’Heure d’amour",
      "author": "Sully Prudhomme",
      "poem": "C’est l’heure où ton regard se voile,\nOù ton souffle est plus doux que le soir,\nOù ton âme, comme une étoile,\nS’allume au fond de mon espoir.\n\nPrends ma main, laisse-toi guider,\nLe monde n’est plus qu’un rêve léger,\nEt dans tes yeux, je veux me noyer."
    },
    {
      "title": "Je t’aime comme…",
      "author": "Louis Aragon",
      "poem": "Je t’aime comme on déteste ses chaînes,\nComme on aime son ombre et son reflet,\nComme on aime la pluie après la sécheresse,\nComme on aime un pays qu’on a quitté.\n\nJe t’aime comme on aime la lumière\nQui brûle et qui aveugle à la fois,\nComme on aime la vie, comme on aime la guerre,\nComme on aime le jour qui renaît."
    },
    {
      "title": "Tes mains",
      "author": "Guillaume Apollinaire",
      "poem": "Tes mains sont des colombes\nQui volent sur mon cœur,\nElles apaisent mes peines\nEt chassent mes douleurs.\n\nElles sont douces et fortes,\nElles savent tout donner,\nElles sont mes deux portes\nVers un monde à aimer."
    },
    {
      "title": "L’Amour et la Femme",
      "author": "Charles Baudelaire",
      "poem": "Tu es la femme, ô toi qui m’ensorcelles,\nLa femme, source de joies et de tourments,\nTon corps est un poème, tes yeux sont des étincelles,\nEt ton âme, un jardin plein de parfums.\n\nJe me perds dans tes cheveux comme dans une forêt,\nEt ton rire est pour moi la plus douce des musiques."
    },
    {
      "title": "Pour toi",
      "author": "Jacques Prévert",
      "poem": "Je te donne ces mots comme on offre des fleurs,\nPour qu’ils te rappellent, même en mes absences,\nQue tu es la lumière qui danse dans mes jours,\nEt la douceur qui berce mes nuits silencieuses."
    },
    {
      "title": "L’Étreinte",
      "author": "Arthur Rimbaud",
      "poem": "Tes bras sont mon refuge, ta voix est ma raison,\nTon souffle est un vent chaud qui caresse mon âme.\nQuand tu m’enlaces, le monde s’efface,\nEt je ne suis plus qu’un cœur qui bat pour toi."
    },
    {
      "title": "La Promesse",
      "author": "René Char",
      "poem": "Je te promets les matins dorés,\nLes soirs où le ciel s’embrase pour nous,\nLes nuits où nos rêves se mêlent,\nEt les jours où tout nous sourit.\n\nJe te promets de t’aimer sans compter,\nComme on aime un feu qui jamais ne s’éteint."
    },
    {
      "title": "Tes yeux",
      "author": "Alfred de Musset",
      "poem": "Tes yeux sont deux lacs où je me noie avec joie,\nDeux miroirs où je vois mon âme se refléter.\nQuand tu me regardes, je perds toute mémoire,\nEt je ne sais plus que t’aimer et t’adorer."
    },
    {
      "title": "L’Amour infini",
      "author": "Anna de Noailles",
      "poem": "Si je devais compter les raisons de t’aimer,\nJe perdrais le compte avant la fin du jour.\nCar chaque instant passé loin de toi est un hiver,\nEt chaque instant avec toi, un éternel toujours."
    },
    {
      "title": "Le Baiser",
      "author": "Pierre de Ronsard",
      "poem": "Un baiser de toi vaut tous les trésors,\nUn regard, tous les astres du ciel,\nTa voix, toutes les musiques d’or,\nEt ton amour, l’immortalité."
    },
    {
      "title": "L’Attente",
      "author": "Marceline Desbordes-Valmore",
      "poem": "Je t’attends comme on attend la pluie en été,\nComme on attend le jour après la nuit,\nComme on attend l’amour quand on a tout perdu.\nViens, ma belle, viens vite, je t’ai tant rêvée."
    },
    {
      "title": "La Danse",
      "author": "Paul Verlaine",
      "poem": "Dansons sous les étoiles, dansons sans fin,\nQue nos cœurs battent à l’unisson.\nTes pas sont légers comme un souffle divin,\nEt dans tes bras, je danse sur le monde."
    },
    {
      "title": "L’Amour et la Mer",
      "author": "Alphonse de Lamartine",
      "poem": "Tu es comme la mer, tantôt calme, tantôt folle,\nTantôt douce, tantôt pleine de mystères.\nMais toujours, je me noie dans ton onde,\nEt je renais plus fort à chaque lumière."
    },
    {
      "title": "Le Secret",
      "author": "Yves Bonnefoy",
      "poem": "Je garde en moi ton nom comme un secret sacré,\nComme un trésor que nul ne peut voler.\nTu es la seule à savoir ce que je cache,\nEt c’est pour toi que mon cœur bat."
    },
    {
      "title": "L’Étoile",
      "author": "Jules Supervielle",
      "poem": "Tu es mon étoile, celle qui me guide,\nCelle qui brille quand tout est noir.\nSans toi, je serais un navire sans boussole,\nAvec toi, je suis l’univers."
    },
    {
      "title": "La Rencontre",
      "author": "Louise Labé",
      "poem": "Le jour où nos regards se sont croisés,\nLe monde a changé de couleur.\nDepuis, chaque instant est un cadeau,\nEt chaque souvenir, une douceur."
    },
    {
      "title": "L’Amour et le Temps",
      "author": "Édith Piaf (inspiré)",
      "poem": "Je ne regrette rien, car c’est toi,\nC’est ton amour, c’est ta voix,\nC’est ton rire qui m’illumine,\nEt c’est pour toi que je chemine."
    },
    {
      "title": "La Confession",
      "author": "Henri de Régnier",
      "poem": "Je t’avoue que je t’aime, sans fard et sans mensonge,\nComme on aime un feu qui consume et qui grandit.\nJe t’aime pour tes forces, pour tes faiblesses aussi,\nCar c’est tout toi que j’aime, et c’est tout toi que je songe."
    }
  ]


  private index: number = 0;

  getNextPoem(): Observable<Poem> {
    let currIndex = this.index;
    this.index = (this.index + 1) % this.poems.length;
    return new Observable<Poem>((observer) => {
      observer.next(this.poems[currIndex])
    })
  }
  constructor() { }
}
