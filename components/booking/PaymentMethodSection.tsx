
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";

const PaymentMethodSection: React.FC = () => (
  <div>
    <h2 className="text-2xl font-anton font-normal text-[#101010] uppercase mb-4">PAYMENT METHOD</h2>
    <div className="space-y-4">
      <div>
        <label className="font-medium text-[#101010] text-base font-inter leading-normal tracking-normal mb-2">Cardholder's Name</label>
        <Input placeholder="Rakib Darwin" className="border-gray-300 h-14" />
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
          <Input placeholder="8888 - 8888 - 8888 - 8888" className="border-gray-300 h-14" />
        </div>
        <div>
          <label className="font-medium text-[#101010] text-base font-inter leading-normal tracking-normal mb-2 block">Expiry Date</label>
          <Input placeholder="12/28" className="border-gray-300 h-14" />
        </div>
        <div>
          <label className="font-medium text-[#101010] text-base font-inter leading-normal tracking-normal mb-2 block">CVV</label>
          <Input placeholder="888" className="border-gray-300 h-14" />
        </div>
      </div>
    </div>
  </div>
);

export default PaymentMethodSection;
