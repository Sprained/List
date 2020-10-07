import React from "react";

import Logo from '../../assets/logo.png';

import './styles.css';

export default function Termos() {
  return (
    <>
      <div className="topnav">
        <img className="Logo" src={Logo} alt="Logo"/>
        <a href="/login">Login</a>
        <a href="#profissionais">Profissionais</a>
        <a href="#sobre">Sobre</a>
        <a href="/">Home</a>
      </div>
      <hr></hr>
      <div className="containerdiv">
      <h4>Termos e Condições</h4>
      <div className="termosdiv">
        <h5>OBJETO</h5>
        <p className="font">Os presentes termos e condições regulamentam o uso da plataforma ListDoctor por qualquer pessoa física ou jurídica, independente de sua finalidade de uso, sendo pagante ou não de nossos serviços.</p>
        <p className="font">A navegação na plataforma atribui o status de USUÁRIO a você e implica em sua aceitação total das condições aqui expostas, alertando que essas condições podem ser modificadas sem notificação prévia.</p>
        <p className="font">Sua leitura é importante para a compreensão do uso e tratamento de seus dados pessoais ao fazer uso das informações e serviços oferecidos.</p>
        <p className="font">O usuário também se compromete a fazer uso correto do site de acordo com as leis, boa-fé, e ao presente instrumento, e será responsável perante ao ListDoctor ou terceiros, por quaisquer danos que possam ser causados em decorrência da violação de eventuais obrigações ou orientações aqui impostas.</p>
        <p className="font">Essas condições de uso são complementadas, no caso de profissionais ou centros que utilizam serviços de diretório ou software de gestão de consultas, bem como aqueles que contratam os serviços oferecidos pelo ListDoctor, pelas Condições previstas nos contratos destinados aos profissionais e estabelecimentos de saúde a depender dos serviços contratados pelos mesmos.</p>
        <p className="font">O uso do site do ListDoctor pelos usuários que desejem agendar uma consulta, ou para aqueles que possuam um perfil básico, é gratuito.</p>
        <p className="font">Se você discordar de todos ou parte destes Termos, o Cliente deve abster-se de continuar a usar o site e/ou seus serviços.</p>
        <h5>2. COMUNICAÇÕES</h5>
        <p className="font" >Para entrar em contato conosco, fornecemos diferentes meios de contato que detalhamos abaixo:</p>
        <ul>
          <li className="marginli">E-mail: suporte@listdoctor.com</li>
          <li className="marginli">Endereço postal</li>
          <li className="marginli">Todas as notificações e comunicações entre usuários e o ListDoctor serão consideradas eficazes, para todos os efeitos, quando feitas por qualquer meio detalhado acima.</li>
        </ul>
        <h5>3. CONDIÇÕES DE ACESSO E USO</h5>
        <p className="font"> O site é uma plataforma de intermediação de serviços prestados por profissionais e/ou estabelecimentos de saúde e do usuário, no qual o ListDoctor disponibiliza (a depender de sua relação contratual com o ListDoctor) agenda para a exposição dos horários de consulta, permitindo ao usuário o agendamento, e o uso de outras funcionalidades fornecidas.</p>
        <p className="font"> O site e seus serviços oferecem acesso livre. No entanto, o ListDoctor pode condicionar a utilização de alguns dos serviços oferecidos em seu site à conclusão do preenchimento de dados e formulário prévio.</p>
        <p className="font">O usuário garante a veracidade de todos os dados informados ao ListDoctor e será o único responsável por declarações falsas ou imprecisas.</p>
        <p className="font">O usuário se compromete expressamente a fazer uso adequado dos conteúdos e serviços do ListDoctor e não usá-los para, entre outros:</p>
        <ul>
          <li className="marginli">Disseminar conteúdo que seja criminoso, violento, pornográfico, racista, xenófobo, ofensivo, apologia ao terrorismo ou, em geral, contrário à lei ou à ordem pública.</li>
          <li className="marginli">Introduzir vírus de computador na rede ou executar ações que possam alterar, danificar, interromper ou gerar erros ou danos aos documentos eletrônicos, dados ou sistemas físicos e lógicos do ListDoctor ou de terceiros; além de dificultar o acesso de outros usuários ao site e seus serviços através do consumo maciço dos recursos de computador através dos quais o ListDoctor presta seus serviços.</li>
          <li className="marginli">Tente acessar as contas de e-mail de outros usuários ou áreas restritas dos sistemas de computador do ListDoctor ou de terceiros e, se for o caso, extrair informações.</li>
          <li className="marginli">Violar os direitos de propriedade intelectual ou industrial, bem como violar a confidencialidade das informações do ListDoctor ou de terceiros. Personificar qualquer outro usuário.</li>
          <li className="marginli">Reproduzir, copiar, distribuir, disponibilizar ou qualquer outra forma de comunicação pública, transformar ou modificar o conteúdo, a menos que a autorização do proprietário dos direitos correspondentes esteja disponível ou legalmente permitida.</li>
          <li className="marginli">Coletar dados para fins publicitários e envie publicidade de qualquer tipo e comunicações para vendas ou outros fins comerciais sem sua solicitação ou consentimento prévio.</li>
        </ul>
        <p className="font">A inclusão de um hiperlink de sites de terceiros não implica, em qualquer caso, a existência de relações entre o ListDoctor e o proprietário do site no qual está estabelecido, nem a aceitação e aprovação pelo ListDoctor de seu conteúdo ou serviços, em especial se relacionados com os perfis de profissionais ou estabelecimentos de saúde.</p>
        <p className="font">O ListDoctor não se responsabiliza pelo uso que cada usuário dá aos materiais disponibilizados neste site ou pelas ações que realiza com base nisso.</p>
        <h5>3.1 Exclusão de garantias e responsabilidade no acesso e uso</h5>
        <p className="font">O conteúdo deste site é de natureza geral e tem um propósito puramente informativo, sem garantir totalmente o acesso a todo o conteúdo, sua completude, correção, validade ou pontualidade, nem sua adequação ou utilidade para um propósito específico.</p>
        <p className="font">O ListDoctor não é responsável por danos de qualquer tipo decorrentes de:</p>
        <ul>
          <li className="marginli">Impossibilidade de acesso ao site ou a falta de veracidade, exatidão, completude e/ou atualidade dos conteúdos, bem como a existência de defeitos e defeitos de todos os tipos de conteúdo transmitido, divulgado, armazenado, disponibilizado, acessado através do site ou dos serviços oferecidos.</li>
          <li className="marginli">Presença de vírus ou outros elementos no conteúdo que possam causar alterações em sistemas de computador, documentos eletrônicos ou dados do usuário.</li>
          <li className="marginli">Descumprimento das leis, boa-fé, ordem pública, do presente instrumento, em decorrência do uso indevido do site. Em particular, e por exemplo, o ListDoctor não é responsável pelas ações de terceiros que violam direitos de propriedade intelectual e industrial, segredos de negócios, direitos à honra, privacidade pessoal e familiar e autoimagem, bem como regulamentos sobre concorrência desleal e publicidade ilícita, ou tampouco pela prestação dos serviços de saúde agendados por meio da plataforma.</li>
        </ul>
        <p className="font">Da mesma forma, o ListDoctor não detém qualquer responsabilidade pelas informações que estão fora deste site e não são gerenciadas diretamente pelo nosso webmaster. A função dos links que aparecem neste site é exclusivamente informar o usuário sobre a existência de outras fontes capazes de expandir o conteúdo oferecido por este site. O ListDoctor não garante ou se responsabiliza pela operação ou acessibilidade dos sites vinculados; nem sugere, convida ou recomenda a visita a eles, de modo que nem será responsável pelo resultado obtido. O ListDoctor não é responsável pelo estabelecimento de hiperlinks por terceiros ou de qualquer conteúdo que não seja gerado ou replicado por ela diretamente.</p>
        <p className="font">É de exclusiva responsabilidade do Usuário e, quando aplicável, do representante legal do Usuário:</p>
        <ul>
          <li className="marginli">manter o ambiente de seus computadores e demais dispositivos de acesso ao Site seguros, valendo-se de ferramentas específicas para tanto, tais como antivírus, firewall, entre outras, de modo a contribuir para a prevenção de riscos eletrônicos;</li>
          <li className="marginli">equipar-se e responsabilizar-se pelos computadores e dispositivos de hardware necessários para o acesso ao Site, bem como pelo acesso desses computadores e dispositivos à internet;</li>
          <li className="marginli">o uso, a guarda, a manutenção e o sigilo de todas as senhas e logins que lhe forem cedidos para acesso ao Site, garantindo ao Prestadora de Serviços que não compartilhará as senhas com quaisquer terceiros, exceto seus empregados autorizados, que as utilizarão somente em seu benefício e nos termos aqui previstos;</li>
          <li className="marginli">a utilização de informações verdadeiras em relação às atividades realizadas em sala de aula, ao conteúdo e de seus dados pessoais, sob pena de serem aplicadas as sanções legais cabíveis além daquelas previstas neste Termo de Uso.</li>
        </ul>
        <h5>3.2. Termos e Condições de Uso dos Serviços</h5>
        <p className="font">Para utilizar os Serviços, o Usuário deverá atender às seguintes condições técnicas:</p>
        <ul>
          <li className="marginli">Possuir acesso à Internet; e instalação de um dos seguintes navegadores da Web: Firefox, Chrome, Safari, Internet Explorer ou Opera, atualizados na versão mais recente.O Usuário terá acesso às informações e avaliações sobre Profissionais e Instituições ao utilizar o mecanismo de busca disponibilizado no Site.</li>
        </ul>
        <p className="font">O Usuário poderá agendar uma consulta com o Profissional, utilizando o Calendário de Consultas, desde que as informações de contato dessa pessoa sejam verificadas pela Prestadora de Serviços e que o Profissional seja assinante de serviços que incluem a disponibilização de agenda online.</p>
        <p className="font">O Usuário poderá:</p>
        <ul>
          <li className="marginli">publicar avaliações e opiniões sobre Profissionais e Instituições;</li>
          <li className="marginli">adicionar e corrigir informações sobre Profissionais e Instituições;</li>
          <li className="marginli">ativar serviços de notificação de novas informações e opiniões;</li>
          <li className="marginli">entrar em contato com os Perfis de Profissionais verificados</li>
          <li className="marginli">denunciar abuso.</li>
        </ul>
        <p className="font">O serviço de notificação de novas informações e opiniões é ativado mediante a adição de uma opinião sobre o Perfil de um determinado Profissional, agendamento de uma consulta por meio do Calendário de Compromissos ou acesso ao Perfil de um determinado Profissional.</p>
        <p className="font">A Prestadora de Serviços reserva-se o direito de suspender, temporariamente, a prestação dos Serviços durante a atualização e/ou reconstrução do Site, ou ainda, durante trabalhos de manutenção de sistemas.</p>
        <p className="font">Este website, suas plataformas ou aplicativos não são uma ferramenta de diagnóstico on-line, tampouco o ListDoctor tem qualquer relação com os serviços fornecidos pelos profissionais de saúde.</p>
        <p className="font">O ListDoctor presta serviços de informação sobre médicos, com base em seus cadastros pessoais realizados ativamente pelo profissional, ou em dados públicos obtidos na rede ou nos Conselhos profissionais.</p>
        <p className="font">O ListDoctor não garante que o profissional de saúde sugerido seja necessariamente o profissional de saúde indicado a realizar o devido diagnóstico.</p>
        <p className="font">O ListDoctor não se responsabiliza pela constatação de diagnóstico diverso, pois não se presta a indicar diagnóstico, sendo que apenas o profissional de saúde, através de consulta, pode constatar diagnóstico através de análise clínica e de exames.</p>
        <p className="font">O ListDoctor orienta que para a constatação efetiva de diagnósticos, é necessário que o usuário consulte um profissional médico ou outro profissional de saúde.</p>
        <p className="font">O usuário consente expressamente o tratamento de seus dados para o uso dos serviços da plataforma e aplicativos do ListDoctor e autoriza a transmissão dos dados para os profissionais de saúde com os quais venha a agendar consulta.</p>
        <h5>3.3. Informações sobre Profissionais e Instituições</h5>
        <p className="font">As opiniões/avaliações serão acompanhadas pela assinatura do Usuário e somente poderão se referir às atividades profissionais exercidas pelo Profissional. As opiniões e informações sobre Profissionais se baseiam apenas na experiência pessoal do Usuário, sendo vedada qualquer avaliação que envolva terceiros, com exceção de pessoas incapazes de fornecer suas próprias opiniões.</p>
        <p className="font">É vedado ao Usuário:</p>
        <ul>
          <li className="marginli">adicionar várias opiniões e/ou avaliações sobre o mesmo incidente médico;</li>
          <li className="marginli">publicar conteúdo publicitário e de marketing de modo a redirecionar para sites de produtos e afins;</li>
          <li className="marginli">adicionar opiniões e avaliações em seus próprios perfis de modo a manipular opiniões, informações e classificações;</li>
          <li className="marginli">apresentar opiniões e comentários que sejam falsos.</li>
        </ul>
        <p className="font">O Usuário confirma que as informações ou opiniões que ele venha a fornecer serão verdadeiras. A Prestadora de Serviços não se responsabiliza, por conseguinte, pela existência ou legitimidade dos dados cadastrados pelo usuário no Site e em suas diversas ferramentas, assim como pela capacidade para contratar do Usuário ou pela veracidade dos dados pessoais em seu cadastro, sendo que estes dados são inseridos pelo usuário por sua própria conta, risco e responsabilidade.</p>
        <p className="font">A Prestadora de Serviços se reserva ao direito de recusar publicar as opiniões ou informações e de remover conteúdo publicado que contrariem os presentes Termos de Uso ou disposições legais. Nesta hipótese, o Usuário não terá o direito de fazer qualquer reclamação contra o Prestadora de Serviços.</p>
        <p className="font">A Prestadora de Serviços terá o direito de exigir que, ao publicar uma opinião e/ou avaliação, o Usuário seja adicionalmente verificado, por exemplo, com o uso de uma conta no Facebook ou por meio de validação em outros dispositivos.</p>
        <p className="font">A Prestadora de Serviços tem o direito de suspender ou cancelar o acesso de qualquer Usuário nos casos de suspeita de fraude; de injúria, calúnia ou difamação; ofensas de qualquer natureza à terceiros, profissionais e as instituições de saúde; inserção na plataforma de informações inverídicas; participação para a obtenção de benefício ou vantagem de forma ilícita; ou pelo não cumprimento de quaisquer das condições deste Termo de Uso e da Política de Privacidade. Nos casos referidos neste parágrafo, a Prestadora de Serviços não deverá qualquer indenização ao usuário e poderá ingressar com a ação cabível a fim de resguardar seus interesses.</p>
        <h5>3.4. Perfis Básicos de Profissionais e Instituições</h5>
        <p className="font">Para o Cadastro do Perfil de um Profissional, o Usuário deverá fornecer informações básicas de cadastro, sendo necessário: título profissional, primeiro nome e sobrenome, endereço e detalhes de contato para o local onde os serviços de saúde são realizados, a especialização do Profissional e o(S) número (s) de registro profissional, caso aplicável.</p>
        <p className="font">Para o Cadastro do Perfil de uma Instituição, o Usuário deverá fornecer informações básicas de cadastro, sendo necessário: nome da instituição, categoria e endereço e detalhes de contato.</p>
        <p className="font">A Prestadora de Serviços reserva-se ao direito exclusivo de inserir e editar informações relativas ao número de telefone e outros dados de contato do(a) Profissional/Instituição. Outros dados importantes para a utilização da Plataforma poderão ser requeridos, sendo que o usuário se responsabiliza civil e criminalmente, inclusive perante terceiros, pela veracidade dos dados informados.</p>
        <p className="font">Os campos de nome e sobrenome de um perfil não podem ser preenchidos com nenhuma outra informação além do primeiro nome e sobrenome de um profissional.</p>
        <p className="font">Cada Profissional/Instituição possui direito a apenas um Perfil, sendo vedada a criação de um Perfil comum para vários Profissionais/Instituições. Se verificada a existência de Perfis duplicados, a Prestadora de Serviços se reserva ao direito de excluir a página. O Perfil de uma Instituição deve se referir a um local físico de uma Instituição. Se uma instituição médica tem vários locais físicos, cada um deles deve ter um perfil separado.</p>
        <p className="font">É facultado ao(à) Profissional/Instituição criar seu próprio Perfil ou confirmar informações encontradas em um perfil existente, sendo para tanto necessário o Cadastro no Site.</p>
        <p className="font">O Perfil criado ou confirmado por um determinado Profissional será identificado como um "Perfil verificado", possibilitando a este:</p>
        <ul>
          <li className="marginli">editar informações sobre seu Perfil;</li>
          <li className="marginli">adicionar fotos;</li>
          <li className="marginli">responder sob a forma de comentário às opiniões colocadas pelos Usuários;</li>
          <li className="marginli">responder perguntas feitas pelos Usuários;</li>
          <li className="marginli">revisar as estatísticas do Perfil.</li>
        </ul>
        <p className="font">Um Perfil de uma Instituição criada ou confirmada por um determinado Titular será identificado como um "Perfil verificado", o qual possibilitará a este:</p>
        <ul>
          <li className="marginli">editar informação sobre a Instituição;</li>
          <li className="marginli">adicionar o logotipo da Instituição;</li>
          <li className="marginli">revisar as estatísticas do Perfil.</li>
        </ul>
        <p className="font">O Titular pode publicar apenas o logotipo da Instituição no seu Perfil (outras imagens são proibidas); consentindo o Proprietário com a divulgação e compartilhamento público do logotipo adicionado pelo Titular no Site. Se ao logotipo da Instituição tiver sido concedido proteção de marca registrada, o Proprietário dá o seu consentimento para uso do logotipo na medida necessária para que a Prestadora de serviços possa prestar os serviços contratados e concorda com seu compartilhamento público, sendo vedado adicionar logotipos que infrinjam a natureza profissional do Site.</p>
        <p className="font">É proibido publicar fotos de outras pessoas e quaisquer tipos de gráficos. Devido às características do formato digital, as fotografias podem ser retocadas, desde que se trate de uma correção global que melhore a qualidade da fotografia. Intervenções seletivas para adicionar ou remover elementos, combinar várias fotografias ou alterar a composição original de uma foto não são permitidas. Também é proibido publicar fotos com tons pornográficos ou que violem a natureza profissional do Site.</p>
        <p className="font">A imagem que não satisfizer os critérios acima poderá ser excluída pela Prestadora de Serviços sem aviso prévio e sem a necessidade de informar o profissional sobre a exclusão.</p>
        <p className="font">O Profissional concede à Prestadora de Serviços uma licença não exclusiva, permanente e não paga para utilizar a fotografia através de campos de utilização, tais como, reprodução por meios analógicos ou digitais; memória do computador; redes de informática ou multimídia; circulação pública, disponibilizar o trabalho publicamente em um local e horário selecionados pelo Prestadora de Serviços; rastreio, difusão, reemissão e reprodução; arquivar a fotografia em bases de dados; e utilização da fotografia para a promoção da Prestadora de Serviços. A remoção da Conta pelo Profissional não afetará a validade da referida licença.</p>
        <p className="font">Ao fornecer seus dados e realizar cadastro para uso dos serviços fornecidos pela plataforma ListDoctor, gratuitos ou pagos, o Profissional ou Instituição autoriza o uso de seus dados pela plataforma, bem como a outras ferramentas e plataformas, ferramentas, aplicativos e similares, criados pelo ListDoctor ou por esta em parceria com outras empresas, para os mesmos fins a que se destina.</p>
        <h5>3.5. Condições de adesão e formas de extinção</h5>
        <p className="font">Profissional através do Calendário de Consulta, ou (iv)contrato firmado para a contratação dos serviços em qualquer outra forma.</p>
        <p className="font">A adesão do Contrato está vinculada ao consentimento da ciência de todas as condições aqui estabelecidas, sem a necessidade de fornecer confirmações adicionais. O Usuário, Profissional e/ou Proprietário se compromete a respeitar os Termos de Uso.</p>
        <p className="font">Ao aderir ao Contrato o Usuário, Profissional e/ou Proprietário:</p>
        <ul>
          <li className="marginli">consente com o processamento de dados pessoais de acordo com os Termos de Uso e em especial a nossa política de privacidade disponível no link: https://www.listdoctor.com.br/privacidade;</li>
          <li className="marginli">confirma a veracidade das informações fornecidas no Cadastro;</li>
          <li className="marginli">autoriza o recebimento, em um endereço de e-mail especificado, de mensagens do sistema sobre interrupções técnicas na operação do Site, atualizações dos Termos de Uso, novas funcionalidades e informações de marketing.</li>
        </ul>
        <p className="font">O Contrato é celebrado por um período indeterminado.</p>
        <p className="font">Para se cadastrar o Usuário ou Profissional deve completar o formulário disponibilizado no Site, sendo fornecido pela Prestadora de Serviços login e senha para Cadastro e acesso através do link: https://www.listdoctor.com.br/register-doctor. O Usuário também pode completar o registro, marcando uma consulta com um Profissional através do Calendário de Consultas. Se o consentimento de qualquer das disposições contidas nos Termos de Uso for revogado, o Usuário terá a obrigação de deletar imediatamente a sua Conta ou de informar a Prestadora de Serviços tal revogação.</p>
        <h5>4. PROTEÇÃO DE DADOS</h5>
        <p className="font">A disponibilização de informações de cunho pessoal e imagens do Usuário à Prestadora de Serviços visam o funcionamento das ferramentas que compõem o Site, não constituindo uso indevido de imagem, não podendo a Prestadora de Serviços ser responsabilizada pela sua divulgação quando no contexto de uso na plataforma ou da prestação de serviços.</p>
        <p className="font">É de responsabilidade da Prestadora de Serviços proteger e conservar todos os dados pessoais e senhas dos Usuários, Profissionais e Instituições, de modo que as informações fornecidas estão sujeitas a medidas de segurança para impedir o acesso, o uso e a divulgação não autorizados.</p>
        <p className="font">A Prestadora de Serviços disponibilizará um espaço na plataforma para ser utilizado como “repositório de documentos”, sendo de responsabilidade exclusiva do Profissional as informações ali depositadas.</p>
        <p className="font">O usuário que desejar realizar avaliação dos profissionais, deverá cadastrar seu número de celular, para que receba o código de validação, que deverá ser preenchido a fim de confirmar sua identidade. O ListDoctor, não fará o uso desse número de telefone para outros fins, incluindo comerciais ou de marketing. Além disso, o ListDoctor não identificará o usuário através de seu número de telefone, sendo o dado tratado como dado pessoal para fins legais. A Prestadora de Serviços garantirá que os Usuários e Profissionais tenham acesso aos seus próprios dados e possam corrigi-los, editá-los e complementá-los. O ListDoctor não faz uso de dados sensíveis de pacientes que receba, ou que sejam incluídos em seus sistemas, prontuários e demais funcionalidades, para divulgação de qualquer forma, mantendo o sigilo protegido pela legislação brasileira, salvo nos casos em que haja ordem judicial.</p>
        <h5>5. PROCEDIMENTO EM CASO DE REALIZAÇÃO DE ATIVIDADES DE NATUREZA ILÍCITA</h5>
        <p className="font">Caso qualquer usuário ou terceiro considere que existem fatos ou circunstâncias que revelam a ilegalidade do uso de qualquer conteúdo e/ou o desempenho de qualquer atividade nas páginas da Web inclusas ou acessíveis através do site, você deve enviar uma notificação ao ListDoctor identificando-se adequadamente e especificando as supostas violações.</p>
        <h5>6. LEI APLICÁVEL</h5>
        <p className="font">As condições atuais serão regidas pela legislação brasileira vigente e o idioma aplicado em sua plataforma e demais comunicações será o português.</p>
        <h5>7. SUPORTE</h5>
        <p className="font">O Usuário que tenha problemas com a utilização ou apresente dificuldade para utilizar o Site deverá entrar em contato com o suporte da Prestadora de Serviços no prazo de até 21 (vinte e um) dias após o evento, através do e-mail: suporte@listdoctor.com. A partir da formalização da comunicação, a Prestadora de Serviços trabalhará para solucionar a situação ou esclarecer a dúvida do Usuário.</p>
        <p className="font">Cada reivindicação deve ser processada no prazo máximo de 21 (vinte e um) dias a partir do momento em que é feita. Se este prazo não puder ser mantido, a Prestadora de Serviços notificará o Usuário, antes do término do prazo, das causas do atraso e especificar um novo prazo.</p>
        <h5>8. DENÚNCIAS</h5>
        <p className="font">Denúncias quanto à veracidade e confiabilidade das avaliações do Site devem ser comunicadas e serão examinadas pela Prestadora de Serviços no prazo de 14 (quatorze) dias úteis. Outras queixas, bem como comentários, sugestões e erros devem ser comunicados por e-mail para suporte@listdoctor.com</p>
        <h5>9. CONDIÇÕES GERAIS</h5>
        <p className="font">A Prestadora de Serviços reserva-se ao direito de alterar as condições deste Termo de Uso a qualquer momento.</p>
        <p className="font">Este Termo vincula as partes e seus sucessores, sejam eles a qualquer título.
        Quaisquer direitos concedidos de acordo com o presente Termo de Uso não podem ser transferidos ou cedidos pelo Usuário, mas podem ser transferidos pela Prestadora de Serviços sem qualquer restrição ou notificação prévia.</p>
        <p className="font">A tolerância da Prestadora de Serviços em exigir o estrito cumprimento das condições deste Termo de Uso, não constitui, em hipótese alguma, novação ou renúncia, nem impede que esta exerça esses direitos a qualquer tempo.</p>
        <p className="font">Todas as disposições deste Termo que prevejam a observância de obrigações ou responsabilidades após a rescisão ou extinção deste Termo e/ou dos Serviços, subsistirão a sua rescisão ou extinção e continuarão em pleno vigor e efeito, em especial no que tange à propriedade intelectual, confidencialidade e privacidade de dados e informações.</p>
        <p className="font">Este Termo não estabelece qualquer relação de mandato, sociedade e/ou associação, vínculo empregatício, agenciamento, representação, consórcio, joint venture ou responsabilidade solidária entre a Prestadora de Serviços e o Usuário, que são pessoas físicas e jurídicas independentes e autônomas para todos os fins de direito, tampouco confere poderes a uma das partes para a representação da outra em quaisquer negócios jurídicos. A relação aqui estipulada entre a Prestadora de Serviços e o Usuário é válida exclusivamente para o objeto e efeitos deste Termo de Uso. Se alguma cláusula deste Termo for considerada ilegal, nula ou incapaz de ser cumprida por qualquer motivo, esta será considerada uma cláusula independente da parte remanescente deste Contrato e não afetará a validade ou a aplicabilidade do cumprimento dos termos do restante do presente.</p>
        <p className="font">Os termos constantes no presente instrumento, caso conflitantes com os termos de contrato destinado aos profissionais de saúde contratantes dos serviços pagos do ListDoctor, se sobrepõe às cláusulas do presente instrumento.</p>
        <p className="font">ESTE CONTRATO CONSIDERAR-SE-Á CELEBRADO E OBRIGATÓRIO ENTRE A PRESTADORA DE SERVIÇOS - LISTDOCTOR E O USUÁRIO, NO MOMENTO EM QUE ESTE CONCLUIR O SEU CADASTRO E O PROCEDIMENTO PREVISTO NO SITE, SENDO CERTO QUE, ASSIM PROCEDENDO, O USUÁRIO DECLARA TER LIDO E COMPREENDIDO TODOS O CONTEÚDO E CONDIÇÕES DESTE TERMO.</p>    
      </div>
      </div>
      <footer>
        <div className="footer_copy_doctor">
          <p className="footer_text">www.listdoctor.com.br © 2020 - Agende agora sua consulta</p>
        </div>
      </footer>
    </>
  )
} 