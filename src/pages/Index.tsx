import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <nav className="relative z-10 border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Heart" size={22} className="text-white" />
            </div>
            <span className="text-xl font-bold">MeetUp Community</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">О проекте</a>
            <a href="#tokenomics" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Токеномика</a>
            <a href="#p2e" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Play-to-Earn</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity font-semibold">
            Запустить приложение
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Первый Play-to-Earn дейтинг в Telegram</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Превращаем знакомства
            <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              в цифровые активы
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            MeetUp Community — это дейтинг-сервис в Telegram с моделью Play-to-Earn, 
            где каждое действие вознаграждается криптотокенами. Знакомься, общайся 
            и зарабатывай реальные активы.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-base font-semibold px-8 h-12">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать зарабатывать
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card text-base font-semibold px-8 h-12">
              <Icon name="FileText" size={20} className="mr-2" />
              Whitepaper
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  300M+
                </div>
                <div className="text-sm text-muted-foreground">Потенциальный рынок</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  P2E
                </div>
                <div className="text-sm text-muted-foreground">Модель заработка</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Solana
                </div>
                <div className="text-sm text-muted-foreground">Блокчейн сеть</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Защищённые серверы</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Простая механика превращает твою социальную активность в финансовую выгоду
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur border-border/50 relative overflow-hidden group hover:border-primary/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                  <Icon name="UserPlus" size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Знакомься и общайся</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Заполняй профиль, свайпай анкеты, ставь лайки, отправляй сообщения. 
                  Каждое действие приносит внутренние поинты.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 relative overflow-hidden group hover:border-primary/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6">
                  <Icon name="Coins" size={28} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Зарабатывай токены</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Поинты конвертируются в нативный криптотокен проекта. Организуй встречи, 
                  получай бонусы за активность и ежедневные заходы.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 relative overflow-hidden group hover:border-primary/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-8 relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">Используй или торгуй</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Трать токены на VIP-статус, супер-лайки, невидимку или торгуй на биржах. 
                  Твоя активность капитализируется в реальные активы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="relative py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Токеномика экосистемы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Токен — это топливо всей платформы, создающее постоянный органический спрос
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-primary/10 via-card/50 to-card/50 backdrop-blur border-border/50">
              <CardContent className="pt-8">
                <Icon name="Zap" size={40} className="text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Утилити токена</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">VIP-статус</div>
                      <div className="text-sm text-muted-foreground">Расширенный функционал и приоритет в ленте</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Супер-лайк</div>
                      <div className="text-sm text-muted-foreground">Гарантированное внимание собеседника</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Режим невидимки</div>
                      <div className="text-sm text-muted-foreground">Просматривай профили анонимно</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">Бусты профиля</div>
                      <div className="text-sm text-muted-foreground">Увеличь видимость своей анкеты</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 via-card/50 to-card/50 backdrop-blur border-border/50">
              <CardContent className="pt-8">
                <Icon name="Gift" size={40} className="text-secondary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Крипточеки</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Уникальная механика мгновенной передачи активов прямо в Telegram. 
                  Создавай персональные чеки с токенами, делись ими в каналах и чатах, 
                  привлекай новых пользователей.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={18} className="text-secondary" />
                    <span>Мгновенная передача активов</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={18} className="text-secondary" />
                    <span>Виральный маркетинг</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={18} className="text-secondary" />
                    <span>Азартная механика поиска</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" size={18} className="text-secondary" />
                    <span>Нулевые комиссии за перевод</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="pt-8">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Shield" size={36} className="text-accent" />
                <div>
                  <h3 className="text-xl font-bold">Собственная инфраструктура</h3>
                  <p className="text-sm text-muted-foreground">Безопасность и стабильность на первом месте</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Мы работаем на собственных защищённых серверах, гарантируя безопасность твоих транзакций 
                и стабильность приложения. Твоё личное общение напрямую капитализируется в реальные активы 
                без посредников и рисков.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* P2E Section */}
      <section id="p2e" className="relative py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Play-to-Earn механика</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждое действие в приложении приносит тебе поинты и токены
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border/50 text-center hover:scale-105 transition-transform">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={32} className="text-primary" />
                </div>
                <div className="text-2xl font-bold mb-2">+100 поинтов</div>
                <div className="text-sm text-muted-foreground">Заполнение профиля</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 text-center hover:scale-105 transition-transform">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" size={32} className="text-secondary" />
                </div>
                <div className="text-2xl font-bold mb-2">+50 поинтов</div>
                <div className="text-sm text-muted-foreground">Ежедневный заход</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 text-center hover:scale-105 transition-transform">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={32} className="text-accent" />
                </div>
                <div className="text-2xl font-bold mb-2">+25 поинтов</div>
                <div className="text-sm text-muted-foreground">Взаимный лайк</div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 text-center hover:scale-105 transition-transform">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/5 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <div className="text-2xl font-bold mb-2">+500 поинтов</div>
                <div className="text-sm text-muted-foreground">Организация встречи</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur border-primary/30 inline-block">
              <CardContent className="pt-6 px-8">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  1000 поинтов = 1 токен
                </div>
                <div className="text-muted-foreground">Простая и понятная конвертация</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Присоединяйся к сообществу</h2>
            <p className="text-lg text-muted-foreground">
              Следи за обновлениями и будь в курсе запуска проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all group">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name="Send" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Основатель проекта</h3>
                    <a 
                      href="https://t.me/magickertt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      @magickertt — Андрей Казунко
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all group">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name="Users" size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Сообщество</h3>
                    <a 
                      href="https://t.me/meetup_community" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline font-medium"
                    >
                      @meetup_community
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <Icon name="Link" size={24} className="text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Адрес контракта</div>
                    <div className="font-mono text-lg font-semibold">Скоро</div>
                  </div>
                </div>
                <div className="md:ml-auto">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={copyAddress}
                    className="border-border hover:bg-card"
                  >
                    <Icon name={copied ? "Check" : "Copy"} size={16} className="mr-2" />
                    {copied ? 'Скопировано' : 'Копировать'}
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Network" size={18} />
                <span>Сеть: <span className="font-semibold text-foreground">Solana</span></span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Heart" size={22} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">MeetUp Community</div>
                <div className="text-xs text-muted-foreground">Play-to-Earn Dating Platform</div>
              </div>
            </div>
            <div className="flex gap-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">О проекте</a>
              <a href="#tokenomics" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Токеномика</a>
              <a href="#p2e" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Play-to-Earn</a>
              <a href="https://t.me/meetup_community" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Telegram
              </a>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 MeetUp Ltd. Все права защищены.</p>
            <p className="mt-2 text-xs">
              Инвестиции в криптовалюты сопряжены с рисками. Прогнозируемая доходность не гарантирована.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
