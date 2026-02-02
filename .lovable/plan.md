

## Add Workflow Automation Tile to FinProIQ Product Suite

### Overview
Add a fifth product tile called "AI Workflow Automation" that describes the automated integration between meeting schedulers, CRMs, financial planning tools, billing systems, and time tracking platforms.

### New Product Tile Content

**Title:** AI Workflow Automation

**Subtitle:** (Scheduler → CRM → Action)

**Description:** 
When a client books, reschedules, or cancels via your **meeting scheduler**, FinProIQ automatically syncs to your **CRM**, provisions records in your **financial planning** and **billing platforms**, and associates **time entries** with clients. Show up prepared — **without manual setup or duplicate data entry**.

**Background Color:** `bg-rose-50/50` (a new color to differentiate from existing tiles)

### Key Features Captured (Using Generic Terms)

| Your Feature | Generic Term Used |
|--------------|-------------------|
| Calendly | Meeting Scheduler |
| WealthBox | CRM |
| RightCapital | Financial Planning Platform |
| AdvicePay | Billing Platform |
| Clockify | Time Tracking |

### Visual Layout
The Product Suite will now have 5 tiles in a 2-column grid:
- Row 1: AI InstantFollow | AI Client & Insight Engine
- Row 2: AI Credibility & TrustBuilder | AI Brand Studio  
- Row 3: AI Workflow Automation (centered or full-width option available)

---

## Technical Changes

### File: `src/components/ProductSuite.tsx`

**Add new product object** to the `products` array:

```typescript
{
  title: "AI Workflow Automation",
  subtitle: "(Scheduler → CRM → Action)",
  description: (
    <>
      When a client books, reschedules, or cancels via your <span className="font-bold">meeting scheduler</span>, FinProIQ automatically syncs to your <span className="font-bold">CRM</span>, provisions records in your <span className="text-accent font-bold">financial planning and billing platforms</span>, and associates time entries with clients. Show up prepared — <span className="text-accent font-bold">without manual setup</span>.
    </>
  ),
  bgColor: "bg-rose-50/50",
}
```

### Grid Layout Options

**Option A - Keep 2-column grid** (5th tile spans or sits alone on bottom row)
- Simple approach, 5th tile will be on its own row

**Option B - Last tile full-width** (more visually balanced)
- Add conditional styling for the last odd item to span full width

I'll implement Option B for better visual balance.

