import { Card } from 'primereact/card';
import { PlusIcon, MinusIcon, TrendingUp, TrendingDown } from "lucide-react"

const MetricCard = ({ keyIndex, title, value, change, isPositive }) => {
  const ArrowIcon = isPositive ? PlusIcon : MinusIcon
  const ChangeIcon = isPositive ? TrendingUp : TrendingDown

  const header = <h2 className={`text-[14px] font-semibold ${(keyIndex !== 1 && keyIndex !== 4) ? 'text-foreground' : 'text-[#1C1C1C]'} leading-[20px] flex items-center`}>
    {title}
  </h2>

  return (
    <Card title={header} className={`p-custom cursor-pointer ${keyIndex === 1 ? 'bg-[#E3F5FF]' : keyIndex === 4 ? 'bg-[#E5ECF6]' : 'bg-card'} shadow-sm border-none rounded-[16px] text-card-foreground`}>
      <div className='flex justify-between items-center'>
        <div className={`text-[18px] md:text-[24px] leading-[36px] font-[600] ${(keyIndex !== 1 && keyIndex !== 4) ? 'text-foreground' : 'text-[#1C1C1C]'} mb-1`}>{value}</div>
        <div className="flex items-center">
          <span className={`flex items-center text-[12px] leading-[18px] font-[400] ${(keyIndex !== 1 && keyIndex !== 4) ? 'text-foreground' : 'text-[#1C1C1C]'}`}>
            <ArrowIcon className="h-2 w-2" />
            {change}<ChangeIcon className='h3 w-3 ml-1' />
          </span>
        </div>
      </div>
    </Card>
  );
};

export default MetricCard;


