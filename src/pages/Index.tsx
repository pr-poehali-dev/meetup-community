import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [investAmount, setInvestAmount] = useState(150000);
  const calculatedROI = (investAmount * 6.5).toLocaleString('en-US');
  const userGrowth = 1000000;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Users" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold">MeetUp Community</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-primary transition-colors">О платформе</a>
            <a href="#tokenomics" className="hover:text-primary transition-colors">Токеномика</a>
            <a href="#earn" className="hover:text-primary transition-colors">Play-to-Earn</a>
            <a href="#partners" className="hover:text-primary transition-colors">Партнёры</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90">Начать</Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Превращаем социальную
              <br />
              <span className="text-primary">активность в капитал</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Инновационная экосистема знакомств в Telegram с моделью Play-to-Earn.
              Масштабируемая платформа на 300M рынка с виральным ростом и ликвидной токеномикой.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Rocket" size={20} className="mr-2" />
                Презентация для инвесторов
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Демо платформы
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16 animate-fade-in">
            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105">
              <CardHeader>
                <Icon name="Users" size={40} className="text-primary mb-4" />
                <CardTitle className="text-4xl font-bold">300M</CardTitle>
                <CardDescription>Целевой рынок пользователей</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105">
              <CardHeader>
                <Icon name="TrendingUp" size={40} className="text-secondary mb-4" />
                <CardTitle className="text-4xl font-bold">1M</CardTitle>
                <CardDescription>Пользователей за 4 месяца</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105">
              <CardHeader>
                <Icon name="DollarSign" size={40} className="text-accent mb-4" />
                <CardTitle className="text-4xl font-bold">3x–10x</CardTitle>
                <CardDescription>ROI для инвесторов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-all hover:scale-105">
              <CardHeader>
                <Icon name="Zap" size={40} className="text-primary mb-4" />
                <CardTitle className="text-4xl font-bold">~0</CardTitle>
                <CardDescription>Стоимость привлечения (CAC)</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О платформе</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Технологическая независимость</h3>
                  <p className="text-muted-foreground">
                    Собственные распределённые серверы и HTML5-интерфейс обеспечивают полный контроль
                    и масштабируемость инфраструктуры.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Share2" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Виральный рост</h3>
                  <p className="text-muted-foreground">
                    Механика крипточеков превращает каждого пользователя в амбассадора,
                    обеспечивая экспоненциальный рост базы с околонулевым CAC.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Wallet" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Многоуровневая монетизация</h3>
                  <p className="text-muted-foreground">
                    Рекламный хаб для B2B-партнёров, агентские комиссии от ресторанов,
                    премиум-подписки и VIP-статусы создают 5 потоков дохода.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Icon name="Landmark" size={80} className="text-primary mx-auto" />
                  <p className="text-2xl font-semibold">Telegram как бесплатный<br />рекламный шлюз</p>
                  <p className="text-muted-foreground">Масштаб без затрат на инфраструктуру</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tokenomics" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Токеномика</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Стабильная экономическая модель с встроенными механизмами роста стоимости актива
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <Icon name="Lock" size={40} className="text-primary mb-4" />
                <CardTitle>Эксклюзивное использование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Токен — единственное средство оплаты всех премиум-сервисов, VIP-статусов
                  и бустов в экосистеме. Гарантирует постоянный спрос.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <Icon name="TrendingUp" size={40} className="text-secondary mb-4" />
                <CardTitle>Дефляционная модель</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  30% комиссий с транзакций сжигается, уменьшая предложение.
                  Растущий спрос + сокращающееся предложение = рост стоимости.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardHeader>
                <Icon name="Shield" size={40} className="text-accent mb-4" />
                <CardTitle>Ликвидность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  40% от инвестиций направляется в пулы ликвидности на DEX.
                  Гарантия стабильных торгов и конвертации в фиат.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/50">
            <CardHeader>
              <CardTitle className="text-2xl">Распределение токенов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Ликвидность (40%)</span>
                    <span className="text-primary">$60,000</span>
                  </div>
                  <div className="h-3 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[40%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Разработка & маркетинг (35%)</span>
                    <span className="text-secondary">$52,500</span>
                  </div>
                  <div className="h-3 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[35%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Команда & адвайзеры (15%)</span>
                    <span className="text-accent">$22,500</span>
                  </div>
                  <div className="h-3 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[15%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Резерв экосистемы (10%)</span>
                    <span className="text-muted-foreground">$15,000</span>
                  </div>
                  <div className="h-3 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-muted-foreground w-[10%]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="earn" className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Play-to-Earn механика</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Превращаем каждое действие пользователя в монетизируемый актив
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <Icon name="Gift" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Крипточеки</CardTitle>
                <CardDescription className="text-base">Виральный механизм роста</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <p className="text-muted-foreground">
                    Пользователи создают персональные чеки с токенами
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">2</span>
                  </div>
                  <p className="text-muted-foreground">
                    Делятся чеками в соцсетях для привлечения новых пользователей
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">3</span>
                  </div>
                  <p className="text-muted-foreground">
                    Получают вознаграждения за каждого приведённого реферала
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">4</span>
                  </div>
                  <p className="text-muted-foreground">
                    Экспоненциальный рост базы с CAC стремящимся к нулю
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <Icon name="Award" size={48} className="text-secondary mb-4" />
                <CardTitle className="text-2xl">Социальная активность</CardTitle>
                <CardDescription className="text-base">Монетизация действий</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Heart" size={20} className="text-accent" />
                    <span>Лайки и реакции</span>
                  </div>
                  <span className="font-semibold text-primary">+10 токенов</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" size={20} className="text-accent" />
                    <span>Сообщения и чаты</span>
                  </div>
                  <span className="font-semibold text-primary">+25 токенов</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="UserPlus" size={20} className="text-accent" />
                    <span>Приглашение друзей</span>
                  </div>
                  <span className="font-semibold text-primary">+100 токенов</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <div className="flex items-center gap-3">
                    <Icon name="Calendar" size={20} className="text-accent" />
                    <span>Бронирование встреч</span>
                  </div>
                  <span className="font-semibold text-primary">+50 токенов</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Партнёры и реклама</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/50">
              <CardHeader>
                <Icon name="Megaphone" size={48} className="text-primary mb-4" />
                <CardTitle className="text-2xl">B2B рекламный хаб</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Высокодоходная реклама для брендов с прямым доступом к активной аудитории:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Таргетированные баннеры и нативная интеграция</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Спонсорские чеки от брендов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Аналитика и метрики эффективности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Геотаргетинг и сегментация аудитории</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/50">
              <CardHeader>
                <Icon name="UtensilsCrossed" size={48} className="text-secondary mb-4" />
                <CardTitle className="text-2xl">Ресторанные партнёрства</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Агентская модель с прямыми комиссиями от реального сектора:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Бронирование столов через платформу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>10–15% комиссия с каждого заказа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Эксклюзивные предложения для VIP-пользователей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <span>Интеграция с системами управления заведений</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">5 потоков монетизации</CardTitle>
              <CardDescription className="text-base">Диверсифицированная модель доходов</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Icon name="Sparkles" size={28} className="text-primary" />
                  </div>
                  <p className="font-semibold">Premium подписки</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                    <Icon name="Crown" size={28} className="text-secondary" />
                  </div>
                  <p className="font-semibold">VIP-статусы</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                    <Icon name="Zap" size={28} className="text-accent" />
                  </div>
                  <p className="font-semibold">Бусты и усиления</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <Icon name="Ad" size={28} className="text-primary" />
                  </div>
                  <p className="font-semibold">B2B реклама</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                    <Icon name="Percent" size={28} className="text-secondary" />
                  </div>
                  <p className="font-semibold">Агентские комиссии</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Калькулятор ROI</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Рассчитайте потенциальную доходность инвестиций
          </p>

          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="investment" className="text-lg mb-3 block">
                    Размер инвестиций ($)
                  </Label>
                  <Input
                    id="investment"
                    type="number"
                    value={investAmount}
                    onChange={(e) => setInvestAmount(Number(e.target.value))}
                    className="text-lg h-12"
                  />
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Прогноз пользователей (4 месяца):</span>
                    <span className="text-2xl font-bold text-primary">{userGrowth.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Средняя доходность (ROI):</span>
                    <span className="text-2xl font-bold text-secondary">6.5x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Минимальный ROI:</span>
                    <span className="text-xl font-semibold text-muted-foreground">3x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Максимальный ROI:</span>
                    <span className="text-xl font-semibold text-muted-foreground">10x</span>
                  </div>
                </div>

                <Separator />

                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">Прогнозируемая прибыль:</span>
                    <span className="text-4xl font-bold text-accent">${calculatedROI}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    *Расчёт основан на средней доходности 6.5x при достижении 1M пользователей
                  </p>
                </div>

                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-lg">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Получить детальный бизнес-план
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Свяжитесь с нами</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Готовы обсудить инвестиции? Оставьте заявку, и мы свяжемся с вами в течение 24 часов
          </p>

          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input id="company" placeholder="ООО «Инвестиции»" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="investor@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Input id="message" placeholder="Интересует детальная информация о проекте..." />
                </div>
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <Icon name="Mail" size={40} className="text-primary mx-auto mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:invest@meetup.community" className="text-primary hover:underline">
                  invest@meetup.community
                </a>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <Icon name="MessageSquare" size={40} className="text-secondary mx-auto mb-2" />
                <CardTitle>Telegram</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://t.me/meetup_invest" className="text-secondary hover:underline">
                  @meetup_invest
                </a>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <Icon name="Phone" size={40} className="text-accent mx-auto mb-2" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+79991234567" className="text-accent hover:underline">
                  +7 (999) 123-45-67
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Users" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">MeetUp Community</span>
            </div>
            <div className="flex gap-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                О платформе
              </a>
              <a href="#tokenomics" className="text-muted-foreground hover:text-primary transition-colors">
                Токеномика
              </a>
              <a href="#earn" className="text-muted-foreground hover:text-primary transition-colors">
                Play-to-Earn
              </a>
              <a href="#partners" className="text-muted-foreground hover:text-primary transition-colors">
                Партнёры
              </a>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-muted-foreground">
            <p>© 2026 MeetUp Community. Инновационная экосистема знакомств с моделью Play-to-Earn.</p>
            <p className="mt-2 text-sm">
              Инвестиции сопряжены с рисками. Прогнозируемая доходность не гарантирована.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
