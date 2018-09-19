export class Policy{
    policyName:string="";
    policyType:string="";
    startDate:Date;
    endDate:Date;
    insurer:string="";
    insured:string ="";
    dependents:number ;
    sumInsured:number ;
    netPremium:number ;
    taxes:number ;
    grossPremium:number ;
    status:string;
    policyId:number;

    isIncreasedSumInsured:boolean=false;
    isAddMaternityBenefit:boolean=false;
    isAddBenefit1:boolean= false;
    isAddBenefit2:boolean= false;
    isOther:boolean= false;
    isRemoveExclusion:boolean= false;

}