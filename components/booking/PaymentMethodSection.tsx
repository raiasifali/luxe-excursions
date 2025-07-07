
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PaymentMethodSectionProps } from "@/types/booking";
import React from "react";

const PaymentMethodSection: React.FC<PaymentMethodSectionProps> = ({ register, errors }) => (
  <div>
    <h2 className="text-2xl font-anton font-normal text-[#101010] uppercase mb-4">PAYMENT METHOD</h2>
    <div className="space-y-4">
      <div>
        <label className="font-medium text-[#101010] text-base font-inter leading-normal tracking-normal mb-2">Cardholder&apos;s Name</label>
        <Input 
          {...register("cardholderName", { 
            required: "Cardholder name is required",
            minLength: { value: 2, message: "Name must be at least 2 characters" }
          })}
          placeholder="Rakib Darwin" 
          className={`border-gray-300 h-14 ${errors.cardholderName ? 'border-red-500' : ''}`} 
        />
        {errors.cardholderName && (
          <p className="text-red-500 text-sm mt-1">{errors.cardholderName.message}</p>
        )}
      </div>
      <div>
        <label className="font-medium text-[#101010] text-base font-inter leading-normal tracking-normal mb-2">Card Type</label>
        <Select defaultValue="visa">
          <SelectTrigger className="border-gray-300 h-14">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="visa">Visa</SelectItem>
            <SelectItem value="mastercard">Mastercard</SelectItem>
            <SelectItem value="amex">American Express</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="font-medium text-[#101010] text-base font-inter leading-normal tracking-normal mb-2 block">Card Number</label>
          <Input
            {...register("cardNumber", {
              required: "Card number is required",
              pattern: {
                value: /^[0-9\s-]{13,19}$/,
                message: "Please enter a valid card number"
              }
            })}
            placeholder="8888 - 8888 - 8888 - 8888" 
            className={`border-gray-300 h-14 ${errors.cardNumber ? 'border-red-500' : ''}`} 
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>
          )}
        </div>
        <div>
          <label className="font-medium text-[#101010] text-base font-inter leading-normal tracking-normal mb-2 block">Expiry Date</label>
          <Input 
            {...register("expiryDate", {
              required: "Expiry date is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                message: "Please enter expiry date in MM/YY format"
              }
            })}
            placeholder="12/28" 
            className={`border-gray-300 h-14 ${errors.expiryDate ? 'border-red-500' : ''}`}
          />
          {errors.expiryDate && (
            <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>
          )}
        </div>
        <div>
          <label className="font-medium text-[#101010] text-base font-inter leading-normal tracking-normal mb-2 block">CVV</label>
          <Input 
            {...register("cvv", {
              required: "CVV is required",
              pattern: {
                value: /^[0-9]{3,4}$/,
                message: "CVV must be 3-4 digits"
              }
            })}
            placeholder="888" 
            className={`border-gray-300 h-14 ${errors.cvv ? 'border-red-500' : ''}`}
          />
          {errors.cvv && (
            <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default PaymentMethodSection;
